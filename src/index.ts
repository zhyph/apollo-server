import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./schema/types/index.js";
import resolvers from "./schema/resolvers/index.js";
import SwapiAPI from "./service.js";
import { expressMiddleware } from "@apollo/server/express4";

export interface IContext {
  swapiAPI: SwapiAPI;
}

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

const bootstrapServer = async () => {
  const server = new ApolloServer<IContext>({
    typeDefs,
    resolvers,
    introspection: true,
  });

  await server.start();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    "/graphql",
    expressMiddleware<IContext>(server, {
      context: async () => ({ swapiAPI: new SwapiAPI() }),
    }),
  );
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  });
};

bootstrapServer();
