import User from '@server/models/userModel';
import cursorPaginate from '@server/utils/pagination/cursorPaginate';
import validateCursor from '@server/utils/pagination/validateCursor';
import validateLimit from '@server/utils/pagination/validateLimit';
import { GraphQLError } from 'graphql';

const typeDefs = `
  extend type Query {
    """
    Returns paginated users.
    """
    allUsers(first: Int after: String): UserConnection!
  }
`;

const resolver = async (
  _root: string,
  args: { first: number; after: string }
) => {
  const { first, after } = args;
  const afterCursor: Array<string> = validateCursor(after) || [];
  let query = {};
  let result;

  const options = {
    limit: validateLimit(first),
  };

  if (after) {
    query = { createdAt: { $gt: afterCursor[0] } };
  }

  const queryOptions = {
    sort: { column: 'createdAt', direction: 'desc' },
  };

  try {
    result = await User.paginate(query, options);
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected Error occured when query all users';
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
