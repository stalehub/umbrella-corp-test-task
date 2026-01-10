export const typeDefs = `
  type ProjectEdge {
    cursor: String!
    node: BOWProject!
  }

  type ProjectConnection {
    totalCount: Int!
    pageInfo: PageInfo!
    edges: [ProjectEdge!]!
  }
`;

export default { typeDefs };
