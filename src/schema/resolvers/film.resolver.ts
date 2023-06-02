import { IContext } from '../../';

const Film = {
	Query: {
		allFilms: (
			_: object,
			args: { page?: number; next?: string },
			{ swapiAPI }: IContext
		) => swapiAPI.allFilms(args),
		film: (_: object, args: { id: number }, { swapiAPI }: IContext) =>
			swapiAPI.film(args.id),
	},
	Person: {
		films: async (
			parent: { films: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.films),
	},
	Starship: {
		films: async (
			parent: { films: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.films),
	},
	Vehicle: {
		films: async (
			parent: { films: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.films),
	},
	Specie: {
		films: async (
			parent: { films: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.films),
	},
	Planet: {
		films: async (
			parent: { films: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.films),
	},
};

export default Film;
