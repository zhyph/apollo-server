import { IContext } from "../../";

const Planet = {
  Query: {
    allPlanets: (
      _: any,
      args: { page?: number; next?: string },
      { swapiAPI }: IContext,
    ) => swapiAPI.allPlanets(args),
    planet: (_: any, args: any, { swapiAPI }: IContext) =>
      swapiAPI.planet(args.id),
  },
};

export default Planet;
