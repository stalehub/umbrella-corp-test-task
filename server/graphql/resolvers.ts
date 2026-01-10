import { IServerContext } from '@/@types/types';
import createBOW from '@server/graphql/mutations/createBOW';
import findProductById from '@server/graphql/queries/findProductById';
import Bow from '@server/models/bowModel';
import Organization from '@server/models/organizationModel';
import Project from '@server/models/projectModel';
import User from '@server/models/userModel';
import createProduct from './mutations/createProduct';
import createProject from './mutations/createProject';
import createUser from './mutations/createUser';
import employeeMutation from './mutations/employeeMutation';
import login from './mutations/login';
import updateUser from './mutations/updateUser';
import allProducts from './queries/allProducts';
import allProjects from './queries/allProjects';
import allUsers from './queries/allUsers';
import findProjectById from './queries/findProjectById';

const resolvers = {
  Query: {
    projectCount: () => Project.collection.countDocuments(),
    bowCount: () => Bow.collection.countDocuments(),
    userCount: () => User.collection.countDocuments(),
    allProducts: allProducts.resolver,
    allProjects: allProjects.resolver,
    findProductById: findProductById.resolver,
    findProjectById: findProjectById.resolver,
    allUsers: allUsers.resolver,
    findUser: async (_root: string, args: { id: string }) =>
      User.findOne({ _id: args.id }),
    findEmployee: async (_root: string, args: { employeeName: string }) =>
      Organization.findOne({
        employeeName: args.employeeName,
      }),
    me: async (
      _root: string,
      _args: unknown,
      { currentUser }: IServerContext
    ) => currentUser,
  },
  Mutation: {
    createProduct: createProduct.resolver,
    createProject: createProject.resolver,
    createBOW: createBOW.resolver,
    createUser: createUser.resolver,
    updateUser: updateUser.resolver,
    updateOrCreateEmployee: employeeMutation.resolver,
    login: login.resolver,
  },
};

export default resolvers;
