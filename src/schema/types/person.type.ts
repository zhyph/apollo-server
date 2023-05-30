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
    homeworld: String
    created: String
    edited: String
    url: String
    starships: [String]
    vehicles: [String]
    species: [String]
    films: [String]
  }

  type AllPeople {
    count: Int
    next: String
    previous: String
    results: [Person]
  }

  type Query {
    person(id: Int!): Person
    allPeople(page: Int): AllPeople
  } 
`;

export default Person;
