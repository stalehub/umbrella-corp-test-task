export const typeDefs = `
  type UserEdge {
    cursor: String!
    node: User!
  }

  type UserConnection {
    totalCount: Int!
    pageInfo: PageInfo!
    edges: [UserEdge!]!
  }
`;

export default { typeDefs };
