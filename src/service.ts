import { RESTDataSource } from "@apollo/datasource-rest";

export const BASE_URL = "https://swapi.dev/api/";

export default class SwapiAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  async allPeople(page: number = 1) {
    return await this.get(`people?page=${page}`);
  }

  async person(id: number) {
    return await this.get(`people/${id}`);
  }

  async allStarships() {
    return await this.get("starships");
  }

  async starship(id: number) {
    return await this.get(`starships/${id}`);
  }
}
