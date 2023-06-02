const Vehicle = `#graphql  
  type Vehicle {
    name: String
    model: String
    manufacturer: String
    cost_in_credits: String
    length: String
    max_atmosphering_speed: String
    crew: String
    passengers: String
    cargo_capacity: String
    consumables: String
    vehicle_class: String
    created: String
    edited: String
    url: String
    films: [Film]
    pilots: [Person]
  }

  type Vehicles {
    isCached: Boolean  
    count: Int
    next: String
    previous: String
    results: [Vehicle]
  }

  type Query {
    vehicle(id: Int!): Vehicle
    allVehicles(page: Int): Vehicles
  } 
`;

export default Vehicle;
