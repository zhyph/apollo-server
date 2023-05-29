import { IContext } from "../../";

const Person = {
  Query: {
    allPeople: (_: any, __: any, { swapiAPI }: IContext) =>
      swapiAPI.allPeople(),
    person: (_: any, args: any, { swapiAPI }: IContext) =>
      swapiAPI.person(args.id),
  },
};

export default Person;
