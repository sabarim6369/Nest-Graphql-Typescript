const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Authresponse {
    success: Boolean!
    message: String!
    user: User
  }

  type Products {
    id: ID
    productname: String!
    quantity: Int!
    price: String!
  }

  type Productresponse {
    success: Boolean!
    status: Int!
    message: String!
    product: [Products]
  }

  type Query {
    login(email: String!, password: String!): Authresponse
    products(id: ID): Productresponse
  }

  type Mutation {
    signup(username: String, email: String!, password: String!): Authresponse
    changepassword(id: ID, newpassword: String): Authresponse
    addproduct(productname: String, quantity: Int, price: String): Productresponse
  }
`;

module.exports = { typeDefs };
