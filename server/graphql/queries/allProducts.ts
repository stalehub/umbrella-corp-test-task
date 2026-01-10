import Product from '@server/models/productModel';
import cursorPaginate from '@server/utils/pagination/cursorPaginate';
import validateCursor from '@server/utils/pagination/validateCursor';
import validateLimit from '@server/utils/pagination/validateLimit';
import { GraphQLError } from 'graphql';

const typeDefs = `
  enum AllProductsOrderBy {
    createdAt
    averageRatings
  }

  extend type Query {
    """
    Returns paginated products.
    """
    allProducts(
      first: Int
      after: String
      orderDirection: OrderDirection
      orderBy: AllProductsOrderBy
      searchKeyword: String
    ): ProductConnection!
  }
`;

interface IProductsArgs {
  first: number;
  after?: string;
  orderDirection?: string;
  orderBy?: string;
  searchKeyword?: string;
}

// TODO:averageRatings field, enum AllProductsOrderBy not applied
const resolver = async (_root: string, args: IProductsArgs) => {
  const { first, after, orderDirection, orderBy, searchKeyword } = args;
  const afterCursor: Array<string> = validateCursor(after) || [];

  const orderColumnByOrderBy: { [key: string]: string } = {
    CreatedAt: 'createdAt',
    AverageRatings: 'averageRatings',
  };
  const column: string =
    (orderBy && orderColumnByOrderBy[orderBy]) || 'createdAt';
  let result;
  let query = {};

  if (searchKeyword) {
    query = {
      $or: [
        { name: { $regex: searchKeyword } },
        { slogan: { $regex: searchKeyword } },
      ],
    };
  }

  if (after) {
    switch (column) {
      case 'createdAt':
        query = { ...query, createdAt: { $gt: afterCursor[0] } };
        break;
      case 'averageRatings':
        query = { ...query, ratings: { $gt: afterCursor[0] } };
        break;
    }
  }

  const options = {
    limit: validateLimit(first),
  };

  const queryOptions = {
    sort: { column, direction: orderDirection },
  };

  try {
    result = await Product.paginate(query, options);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected Error occured when query all products';
    throw new GraphQLError(message, {
      extensions: {
        code: 'GRAPHQL_VALIDATION_FAILED',
      },
    });
  }

  return cursorPaginate(result, queryOptions);
};

export default {
  typeDefs,
  resolver,
};
