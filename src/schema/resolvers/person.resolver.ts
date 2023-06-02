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
	Film: {
		characters: async (
			parent: { characters: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.characters),
	},
	Vehicle: {
		pilots: async (
			parent: { pilots: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.pilots),
	},
	Starship: {
		pilots: async (
			parent: { pilots: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.pilots),
	},
	Specie: {
		people: async (
			parent: { people: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.people),
	},
	Planet: {
		residents: async (
			parent: { residents: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.residents),
	},
};

export default Person;
