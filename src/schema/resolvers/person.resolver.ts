import { IContext } from '../../';

const Person = {
	Query: {
		allPeople: (
			_: object,
			args: { page?: number; next?: string },
			{ swapiAPI }: IContext
		) => swapiAPI.allPeople(args),
		person: (_: object, args: { id: number }, { swapiAPI }: IContext) =>
			swapiAPI.person(args.id),
	},
	Person: {
		starships: async (
			parent: { starships: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.starships),
		homeworld: async (
			parent: { homeworld: string },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.getCache(parent.homeworld),
	},
};

export default Person;
