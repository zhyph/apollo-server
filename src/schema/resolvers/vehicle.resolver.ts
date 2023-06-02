import { IContext } from '../../';

const Vehicle = {
	Query: {
		allVehicles: (
			_: object,
			args: { page?: number; next?: string },
			{ swapiAPI }: IContext
		) => swapiAPI.allVehicles(args),
		vehicle: (_: object, args: { id: number }, { swapiAPI }: IContext) =>
			swapiAPI.vehicle(args.id),
	},
	Person: {
		vehicles: async (
			parent: { vehicles: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.vehicles),
	},
	Film: {
		vehicles: async (
			parent: { vehicles: string[] },
			_: object,
			{ swapiAPI }: IContext
		) => swapiAPI.resolveArrayofUrls(parent.vehicles),
	},
};

export default Vehicle;
