export interface IFetchAll {
	page?: number;
	next?: string;
}

export interface IResponse {
	count: number;
	next: string;
	previous: string;
	results: { [key: string]: string | string[] }[];
}
