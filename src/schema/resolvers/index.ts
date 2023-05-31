import { mergeResolvers } from '@graphql-tools/merge';
import PersonResolver from './person.resolver.js';
import StarshipResolver from './starship.resolver.js';
import PlanetResolver from './planet.resolver.js';

export default mergeResolvers([
	PersonResolver,
	StarshipResolver,
	PlanetResolver,
]);
