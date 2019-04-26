const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Connecting Database
const url = "mongodb://mongo:27017/employment";
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);

// Apollo Server
const { typeDefs } = require('../apollo/type-definitions');
const { resolvers } = require('../apollo/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

//Rise Server
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://server:4000${server.graphqlPath}`)
);
