import { mergeResolvers } from "@graphql-tools/merge";
import PersonResolver from "./person.resolver.js";
import StarshipResolver from "./starship.resolver.js";

export default mergeResolvers([PersonResolver, StarshipResolver]);
