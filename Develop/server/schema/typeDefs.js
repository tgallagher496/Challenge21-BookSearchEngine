const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: Int
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query{
    users: [User]!
    user(userId: ID!): User

  }

  type Mutation{
    //Make resovlers first before you do this!!
  }
`;

module.exports = typeDefs;
