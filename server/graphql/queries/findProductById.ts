import Product from '@server/models/productModel';
import { GraphQLError } from 'graphql';

export const typeDefs = `
  extend type Query {
    """
    Returns product by an id.
    """
    findProductById(id: ID!): Product
  }
`;

export const resolver = async (_root: string, args: { id: string }) => {
  let response;

  try {
    response = await Product.findOne({ gtin: args.id });
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected Error occured when query the product';
    throw new GraphQLError(message, {
      extensions: {
        code: 'GRAPHQL_VALIDATION_FAILED',
      },
    });
  }

  return response;
};

export default {
  typeDefs,
  resolver,
};
