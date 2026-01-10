const typeDefs = `
  type BOW {
    codeName: String!
    version: String!
    based: [String]
    height: String
    length: String
    mass: String
    creationDate: String
    createdVia: [String]
    characteristics: String!
    experimentalType: Boolean!
    massProducted: Boolean!
    imgUrl: String!
  }

  type BOWProject {
    id: ID!
    projectName: String!
    description: String!
    models: [BOW!]!
    createdAt: String!
    updatedAt: String
}`;

export default { typeDefs };
