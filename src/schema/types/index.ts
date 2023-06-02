import { mergeTypeDefs } from '@graphql-tools/merge';
import PersonType from './person.type.js';
import StarshipType from './starship.type.js';
import PlanetType from './planet.type.js';
import VehicleType from './vehicle.type.js';
import FilmType from './film.type.js';
import SpecieType from './specie.type.js';

const types = [
	PersonType,
	StarshipType,
	PlanetType,
	VehicleType,
	FilmType,
	SpecieType,
];

export default mergeTypeDefs(types);
