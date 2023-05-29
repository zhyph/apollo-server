import { mergeTypeDefs } from "@graphql-tools/merge";
import PersonType from "./person.type.js";
import StarshipType from "./starship.type.js";

const types = [PersonType, StarshipType];

export default mergeTypeDefs(types);
