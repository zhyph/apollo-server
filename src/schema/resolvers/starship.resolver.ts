import { IContext } from '../../';

const Starship = {
	Query: {
		allStarships: (_: object, __: object, { swapiAPI }: IContext) =>
			swapiAPI.allStarships(),
		starship: (_: object, args: { id: number }, { swapiAPI }: IContext) =>
			swapiAPI.starship(args.id),
	},
};

export default Starship;
