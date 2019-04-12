const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { Employee } = require("../models/employee");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/employment";
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String
    lastname: String
    cinumber: String
    birthdate: String
    address: String
    phone: String
    role: String
    profession: String
  }
  type Query {
    getEmployees: [Employee]
  }
  type Mutation {
    addEmployee(
      name: String!,
      lastname: String!,
      cinumber: String!,
      birthdate: String!,
      address: String!,
      phone: String!,
      role: String!,
      profession: String!
    ): Employee
  }
`;

const resolvers = {
  Query: {
    getEmployees: async () => await Employee.find({}).exec()
  },
  Mutation: {
      addEmployee: async (_, args) => {
          try {
              let response = await User.create(args);
              return response;
          } catch(e) {
              return e.message;
          }
      }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
