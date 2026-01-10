export const typeDefs = `
  type ProductEdge {
    cursor: String!
    node: Product!
  }

  type ProductConnection {
    totalCount: Int!
    pageInfo: PageInfo!
    edges: [ProductEdge!]!
  }
`;

export default { typeDefs };
