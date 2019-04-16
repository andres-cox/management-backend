const { gql } = require("apollo-server-express");

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
    getEmployee(cinumber: String): [Employee]
  }

  type Mutation {
    addEmployee(
      name: String!
      lastname: String!
      cinumber: String!
      birthdate: String!
      address: String!
      phone: String!
      role: String!
      profession: String!
    ): Employee

    updateEmployee(
      name: String
      lastname: String
      cinumber: String!
      birthdate: String
      address: String
      phone: String
      role: String
      profession: String
    ): Employee

    deleteEmployee(cinumber: String!): [Employee]
  }
`;
module.exports = {
    typeDefs
  };
  