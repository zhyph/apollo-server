import { IContext } from "../../";

const Person = {
  Query: {
    allPeople: (
      _: any,
      args: { page?: number; next?: string },
      { swapiAPI }: IContext,
    ) => {
      return swapiAPI.allPeople(args);
    },
    person: (_: any, args: any, { swapiAPI }: IContext) =>
      swapiAPI.person(args.id),
  },
};

export default Person;
