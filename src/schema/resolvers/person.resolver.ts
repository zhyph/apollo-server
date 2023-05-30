import { IContext } from "../../";

const Person = {
  Query: {
    allPeople: (_: any, args: any, { swapiAPI }: IContext) =>
      swapiAPI.allPeople(args.page),
    person: (_: any, args: any, { swapiAPI }: IContext) =>
      swapiAPI.person(args.id),
  },
};

export default Person;
