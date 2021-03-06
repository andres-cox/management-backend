const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Connecting Database
//development
//const url = "mongodb://localhost:27017/employment";
//docker
const url = "mongodb://mongo:27017/employment";
//deployment
// const url =
//   "mongodb://andres:andrespass@cluster0-shard-00-00-breqi.mongodb.net:27017,cluster0-shard-00-01-breqi.mongodb.net:27017,cluster0-shard-00-02-breqi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);

// Apollo Server
const { typeDefs } = require("../apollo/type-definitions");
const { resolvers } = require("../apollo/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: { apiKey: "service:rescox-5108:Nogp1pza21AATJPpMHfyRg" },
  introspection: true
});
const app = express();

// Set Static Folder
app.use(express.static("public"));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });
// app.use(favicon(__dirname + "/public/favicon.ico"));
server.applyMiddleware({ app });

//Rise Server
//for deployment
// server.listen({ port: process.env.PORT || 3000 }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
//for development
app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
