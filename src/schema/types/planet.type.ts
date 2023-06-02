const Planet = `#graphql
  type Planet {
    name: String
    rotation_period: String
    orbital_period: String
    diameter: String
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: String
    created: String
    edited: String
    url: String
    films: [Film]
    residents: [Person]
  }

  type Planets {
    isCached: Boolean
    count: Int
    next: String
    previous: String
    results: [Planet]
  }

  type Query {
    allPlanets(page: Int): Planets
    planet(id: Int!): Planet
  }
`;

export default Planet;
