import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema/types/index.js";
import resolvers from "./schema/resolvers/index.js";
import SwapiAPI from "./service.js";

export interface IContext {
  swapiAPI: SwapiAPI;
}

const server = new ApolloServer<IContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({
    swapiAPI: new SwapiAPI(),
  }),
});

console.log(`🚀  Server ready at: ${url}`);
