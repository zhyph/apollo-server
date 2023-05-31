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
};

export default Planet;
