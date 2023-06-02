import { mergeResolvers } from '@graphql-tools/merge';
import PersonResolver from './person.resolver.js';
import StarshipResolver from './starship.resolver.js';
import PlanetResolver from './planet.resolver.js';
import VehicleResolver from './vehicle.resolver.js';
import FilmResolver from './film.resolver.js';
import SpecieResolver from './specie.resolver.js';

export default mergeResolvers([
	PersonResolver,
	StarshipResolver,
	PlanetResolver,
	VehicleResolver,
	FilmResolver,
	SpecieResolver,
]);
