export const FRAG_Employee = `
    fragment employeeFields on Employee {
        organizationName: String!
        employeeName: String!
        employeeNumber: Int!
        sex: String!
        unit: String!
        idCard: UmIDCard!
    }
`;
