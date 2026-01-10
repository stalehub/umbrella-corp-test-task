import { AllProjectsOrderBy } from '@/gql/graphql';
import Project from '@server/models/projectModel';
import cursorPaginate from '@server/utils/pagination/cursorPaginate';
import validateCursor from '@server/utils/pagination/validateCursor';
import validateLimit from '@server/utils/pagination/validateLimit';
import { GraphQLError } from 'graphql';
import { isNumber } from 'lodash';
import { PaginateOptions } from 'mongoose';

const typeDef = `
  enum AllProjectsOrderBy {
    createdAt
  }

  extend type Query {
    """
    Returns paginated projects.
    """
    allProjects(
      first: Int
      after: String
      offset: Int
      orderBy: AllProjectsOrderBy
      orderDirection: OrderDirection
      searchKeyword: String
    ): ProjectConnection
  }
`;

interface IProjectArgs {
  first: number;
  after?: string;
  offset?: number;
  orderBy?: string;
  orderDirection?: string;
  searchKeyword?: string;
}

const resolver = async (_root: string, args: IProjectArgs) => {
  const { first, after, offset, orderBy, orderDirection, searchKeyword } = args;
  const limit: number = validateLimit(first);
  const afterCursor: Array<string> = validateCursor(after) || [];
  const skip: number = isNumber(offset) ? offset : 0;

  // Only createdAt field for now
  const orderColumnByOrderBy: { [key: string]: AllProjectsOrderBy } = {
    createdAt: AllProjectsOrderBy.CreatedAt,
  };
  const column: AllProjectsOrderBy =
    (orderBy && orderColumnByOrderBy[orderBy]) || AllProjectsOrderBy.CreatedAt;

  const options: PaginateOptions = {
    limit,
    offset: skip,
    populate: 'models',
  };
  const queryOptions = {
    sort: { column, direction: orderDirection },
  };
  let query = {};
  let result;

  if (searchKeyword) {
    query = {
      $or: [
        { projectName: { $regex: searchKeyword } },
        { description: { $regex: searchKeyword } },
      ],
    };
  }

  if (after) {
    query = { ...query, createdAt: { $gt: afterCursor[0] } };
  }

  try {
    result = await Project.paginate(query, options);
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected Error occured when query all projects';
    throw new GraphQLError(message, {
      extensions: {
        code: 'GRAPHQL_VALIDATION_FAILED',
      },
    });
  }

  return cursorPaginate(result, queryOptions);
};

export default { typeDef, resolver };
