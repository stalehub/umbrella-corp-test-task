import { IProductSchema, IServerContext } from '@/@types/types';
import Product from '@server/models/productModel';
import AuthencationValidator from '@server/utils/AuthencationValidator';
import { GraphQLError } from 'graphql';

const typeDef = `
  createProduct(
    gtin: String!
    name: String!
    slogan: String
    imgUrl: String!
    description: String!
    info: productInfoInput!
    genre: String!
    listPrice: Float!
    ratings: Float
  ):Product
`;

const resolver = async (
  _root: string,
  args: IProductSchema,
  { currentUser }: IServerContext
) => {
  if (!AuthencationValidator(currentUser)) return;

  let newProduct;

  try {
    newProduct = new Product({
      ...args,
      createdAt: new Date().toLocaleString(),
    });

    await newProduct.save();
  } catch (error) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return newProduct;
};

export default {
  typeDef,
  resolver,
};
