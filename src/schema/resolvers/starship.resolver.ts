import { IContext } from "../../";

const Starship = {
  Query: {
    allStarships: (_: any, __: any, { swapiAPI }: IContext) =>
      swapiAPI.allStarships(),
    starship: (_: any, args: any, { swapiAPI }: IContext) =>
      swapiAPI.starship(args.id),
  },
};

export default Starship;
