import { IContext } from '../../';

const Planet = {
	Query: {
		allPlanets: (
			_: object,
			args: { page?: number; next?: string },
			{ swapiAPI }: IContext
		) => swapiAPI.allPlanets(args),
		planet: (_: object, args: { id: number }, { swapiAPI }: IContext) =>
			swapiAPI.planet(args.id),
	},
	Person: {
		homeworld: async (
			parent: { homeworld: string },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.getCache(parent.homeworld),
	},
	Film: {
		planets: async (
			parent: { planets: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.planets),
	},
	Specie: {
		homeworld: async (
			parent: { homeworld?: string },
			_: object,
			{ swapiAPI }: IContext
		) => {
			swapiAPI.getCache(parent.homeworld);
		},
	},
};

export default Planet;
