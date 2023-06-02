import { IContext } from '../../';

const Specie = {
	Query: {
		allSpecies: (
			_: object,
			args: { page?: number; next?: string },
			{ swapiAPI }: IContext
		) => swapiAPI.allSpecies(args),
		specie: (_: object, args: { id: number }, { swapiAPI }: IContext) =>
			swapiAPI.specie(args.id),
	},
	Person: {
		species: async (
			parent: { species: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.species),
	},
	Film: {
		species: async (
			parent: { species: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.species),
	},
};

export default Specie;
