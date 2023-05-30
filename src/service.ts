import { RESTDataSource } from "@apollo/datasource-rest";
import { IFetchAll, IResponse } from "./types/FetchAll";
import LRUCache from "lru-cache";

export const BASE_URL = "https://swapi.dev/api/";

export default class SwapiAPI extends RESTDataSource {
  private cache: LRUCache<string, any>;

  constructor() {
    super();
    this.baseURL = BASE_URL;
    this.cache = new LRUCache({ max: 500 });
  }

  getCache = async (url: string) => {
    const fullUrl = url.includes(BASE_URL) ? url : `${BASE_URL}${url}`;
    if (this.cache.has(fullUrl)) {
      return this.cache.get(fullUrl);
    }

    const data = await this.get(url);

    this.cache.set(fullUrl, data);

    return data;
  };

  checkArrayOfStrings = (arr: any[]) => {
    if (!arr.length) return false;
    return arr.every(
      (item) => typeof item === "string" && item.includes(BASE_URL),
    );
  };

  getAllUrlsAndFetch = async (data: IResponse) => {
    const { results } = data;

    await Promise.allSettled(
      results.map(async (result) => {
        if (!result) return;
        await Promise.allSettled(
          Object.entries(result).map(async ([key, value]) => {
            if (key === "url") return;

            if (Array.isArray(value) && this.checkArrayOfStrings(value)) {
              if (key === "starships") {
                const response = await Promise.allSettled(
                  value.map(async (url) => {
                    return await this.getCache(url);
                  }),
                );
                result[key] = response.map((res) => {
                  if (res.status === "fulfilled") {
                    return res.value;
                  } else {
                    throw res.reason;
                  }
                });
              }
            }

            if (typeof value === "string" && value.includes(BASE_URL)) {
              result[key] = await this.getCache(value);
            }
          }),
        );
      }),
    );
  };

  getAll = async (url: string, { page = 1, next }: IFetchAll) => {
    if (next) {
      return await this.getCache(next);
    }

    const urlWithPage = `${url}?page=${page}`;

    const data = await this.get(urlWithPage);

    await this.getAllUrlsAndFetch(data);

    this.cache.set(`people?page=${page}`, data);

    return data;
  };

  allPeople = async (args: IFetchAll) => await this.getAll("people", args);

  async person(id: number) {
    return await this.getCache(`people/${id}`);
  }

  allPlanets = async (args: IFetchAll) => await this.getAll("planets", args);

  async planet(id: number) {
    return await this.getCache(`planets/${id}`);
  }

  async allStarships() {
    return await this.getCache("starships");
  }

  async starship(id: number) {
    return await this.getCache(`starships/${id}`);
  }
}
