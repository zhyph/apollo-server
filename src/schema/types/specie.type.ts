const Specie = `#graphql  
  type Specie {
    name: String
    classification: String
    designation: String
    average_height: String
    skin_colors: String
    hair_colors: String
    eye_colors: String
    average_lifespan: String
    homeworld: Planet
    language: String
    created: String
    edited: String
    url: String
    films: [Film]
    people: [Person]
  }

  type Species {
    isCached: Boolean  
    count: Int
    next: String
    previous: String
    results: [Specie]
  }

  type Query {
    specie(id: Int!): Specie
    allSpecies(page: Int): Species
  } 
`;

export default Specie;
