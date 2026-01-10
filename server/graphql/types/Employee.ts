const typeDefs = `
  type Employee {
    organizationName: String!
    employeeName: String!
    employeeNumber: String!
    sex: String!
    unit: String!
    idCard: UmIDCard!
    id: ID!
  }

  type UmIDCard {
    cardNumber: Int!
    securityLevel: String!
  }
`;

export default { typeDefs };
