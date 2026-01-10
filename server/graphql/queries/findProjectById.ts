import Project from '@server/models/projectModel';
import { GraphQLError } from 'graphql';

const typeDef = `
  findProjectById(id: ID!):BOWProject
`;

const resolver = async (_root: string, args: { id: string }) => {
  const { id } = args;
  let result;

  try {
    result = await Project.findOne({ _id: id }).populate('models');
  } catch (error) {
    throw new GraphQLError('GRAPHQL_VALIDATION_FAILED', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return result;
};

export default {
  typeDef,
  resolver,
};
