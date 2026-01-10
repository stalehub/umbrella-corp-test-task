import OrderDirections from '@server/graphql/enums/OrderDirections';
import createBOW from '@server/graphql/mutations/createBOW';
import createProduct from '@server/graphql/mutations/createProduct';
import createProject from '@server/graphql/mutations/createProject';
import createUser from '@server/graphql/mutations/createUser';
import employeeMutation from '@server/graphql/mutations/employeeMutation';
import login from '@server/graphql/mutations/login';
import updateUser from '@server/graphql/mutations/updateUser';
import allProducts from '@server/graphql/queries/allProducts';
import allProjects from '@server/graphql/queries/allProjects';
import allUsers from '@server/graphql/queries/allUsers';
import findProductById from '@server/graphql/queries/findProductById';
import findProjectById from '@server/graphql/queries/findProjectById';
import Employee from '@server/graphql/types/Employee';
import PageInfo from '@server/graphql/types/PageInfo';
import Product from '@server/graphql/types/Product';
import ProductConnection from '@server/graphql/types/ProductConnection';
import Project from '@server/graphql/types/Project';
import User from '@server/graphql/types/User';
import UserConnection from '@server/graphql/types/UserConnection';
import ProjectConnection from './types/ProjectConnection';

const typeDefs = `
  ${User.typeDefs}
  ${Employee.typeDefs}
  ${Project.typeDefs}
  ${Product.typeDefs}
  ${PageInfo.typeDefs}
  ${OrderDirections.typeDefs}
  ${UserConnection.typeDefs}
  ${ProductConnection.typeDefs}
  ${ProjectConnection.typeDefs}

  type Query {
    projectCount: Int
    bowCount: Int
    userCount: Int
    ${findProjectById.typeDef}
    findUser(id: ID!): User
    findEmployee(employeeName: String!): Employee
    me: User
  }

  ${allUsers.typeDefs}
  ${allProducts.typeDefs}
  ${findProductById.typeDefs}
  ${allProjects.typeDef}
  ${employeeMutation.typeDef}

  input productInfoInput {
    pulishedDate: String!
    manufacturer: String!
  }

  type Mutation {
    ${createProduct.typeDef}
    ${createProject.typeDef}
    ${createBOW.typeDef}
    ${createUser.typeDef}
    ${updateUser.typeDef}
    ${login.typeDef}
  }
`;

export default typeDefs;
