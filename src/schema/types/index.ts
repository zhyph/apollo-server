import { mergeTypeDefs } from '@graphql-tools/merge';
import PersonType from './person.type.js';
import StarshipType from './starship.type.js';
import PlanetType from './planet.type.js';

const types = [PersonType, StarshipType, PlanetType];

export default mergeTypeDefs(types);
