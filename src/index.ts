import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "apollo-server-express";
import express from "express";
import buildSchema from "./graphql";

export const server = async () => {
  const port = process.env.PORT || 4000;
  const schema = await buildSchema();

  const app = express();
  const server = new ApolloServer({ schema });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(`Now browse to http://localhost:${port}` + server.graphqlPath)
  );
};

server();
