const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    password: String!
  }

  type Page {
    pageName: String!
    pageTitle: String! 
    pageText: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    page(pageName: String!): Page
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    updatePage (
      pageName: String!, 
      pageTitle: String!, 
      pageText: String!
    ): Page
  }
`;

module.exports = typeDefs;
