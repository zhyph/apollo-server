import { IContext } from '../../';

const Starship = {
	Query: {
		allStarships: (_: object, args: object, { swapiAPI }: IContext) =>
			swapiAPI.allStarships(args),
		starship: (_: object, args: { id: number }, { swapiAPI }: IContext) =>
			swapiAPI.starship(args.id),
	},
	Person: {
		starships: async (
			parent: { starships: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.starships),
	},
	Film: {
		starships: async (
			parent: { starships: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.starships),
	},
};

export default Starship;
