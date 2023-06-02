const Person = `#graphql  
  type Person {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: Planet
    created: String
    edited: String
    url: String
    starships: [Starship]
    vehicles: [Vehicle]
    species: [Specie]
    films: [Film]
  }

  type People {
    isCached: Boolean  
    count: Int
    next: String
    previous: String
    results: [Person]
  }

  type Query {
    person(id: Int!): Person
    allPeople(page: Int): People
  } 
`;

export default Person;
