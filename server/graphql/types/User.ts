export const typeDefs = `
  type User {
    username: String!
    email: String
    phone: String
    fullName: String
    id: ID!
  }

  type Token {
    value: String!
  }
`;

export default { typeDefs };
