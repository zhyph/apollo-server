const Film = `#graphql 
  type Film {
    title: String
    episode_id: Int
    opening_crawl: String
    director: String
    producer: String
    release_date: String
    created: String
    edited: String
    url: String
    species: [Specie]
    vehicles: [Vehicle]
    starships: [Starship]
    planets: [Planet]
    characters: [Person]
  }

  type Films {
    isCached: Boolean  
    count: Int
    next: String
    previous: String
    results: [Film]
  }

  type Query {
    allFilms(page: Int): Films
    film(id: Int!): Film
  }
`;

export default Film;
