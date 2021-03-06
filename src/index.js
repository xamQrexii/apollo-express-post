import express from "express";
import { success } from "consola";
import { ApolloServer, gql } from "apollo-server-express";
import { PORT } from "./config";

// initialize express app
const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

// initialize apollo-express server
const server = new ApolloServer({ typeDefs, resolvers, context: {} });

const startApp = () => {
  // inject apollo-express middleware
  server.applyMiddleware({ app });

  // start express server
  app.listen(PORT, () =>
    success({
      message: `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
      badge: true,
    })
  );
};

startApp();
