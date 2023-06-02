import { RESTDataSource } from '@apollo/datasource-rest';
import { IFetchAll } from './types/Service';
import LRUCache from 'lru-cache';

export const BASE_URL = 'https://swapi.dev/api/';

export default class SwapiAPI extends RESTDataSource {
	private cache: LRUCache<string, string>;
	isCached: boolean;

	constructor() {
		super();
		this.baseURL = BASE_URL;
		this.cache = new LRUCache({ max: 500 });
		this.isCached = false;
	}

	getCache = async (url?: string) => {
		if (!url) return null;
		const fullUrl = url.includes(BASE_URL) ? url : `${BASE_URL}${url}`;
		if (this.cache.has(fullUrl)) {
			this.isCached = true;
			return this.cache.get(fullUrl);
		}
		let data,
			hasError = false;
		try {
			data = await this.get(url);
		} catch (error) {
			data = null;
			hasError = true;
		}
		if (!hasError) {
			this.cache.set(fullUrl, data);
			this.isCached = false;
		}
		return data;
	};

	resolveArrayofUrls = async (urls: string[]) =>
		await Promise.all(
			urls.map(async (url: string) => await this.getCache(url))
		);

	getAll = async (url: string, { page = 1, next }: IFetchAll) => {
		if (next) {
			return await this.getCache(next);
		}

		const urlWithPage = `${url}?page=${page}`;

		const data = await this.get(urlWithPage);

		this.cache.set(urlWithPage, data);
		data.isCached = this.isCached;

		return data;
	};

	allPeople = async (args: IFetchAll) => await this.getAll('people', args);

	person = async (id: number) => await this.getCache(`people/${id}`);

	allPlanets = async (args: IFetchAll) => await this.getAll('planets', args);

	planet = async (id: number) => await this.getCache(`planets/${id}`);

	allFilms = async (args: IFetchAll) => await this.getAll('films', args);

	film = async (id: number) => await this.getCache(`films/${id}`);

	allSpecies = async (args: IFetchAll) => await this.getAll('species', args);

	specie = async (id: number) => await this.getCache(`species/${id}`);

	allVehicles = async (args: IFetchAll) => await this.getAll('vehicles', args);

	vehicle = async (id: number) => await this.getCache(`vehicles/${id}`);

	allStarships = async (args: IFetchAll) =>
		await this.getAll('starships', args);

	starship = async (id: number) => await this.getCache(`starships/${id}`);
}
