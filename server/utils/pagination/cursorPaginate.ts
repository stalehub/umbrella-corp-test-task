import {
  PaginatedProductDoc,
  PaginatedProjectDoc,
  PaginatedUserDoc,
} from '@/@types/types';
import { isString } from 'lodash';
import { PaginateResult } from 'mongoose';
import normalizeOrderBy from './normalizeOrderBy';

interface ISortProps {
  column: string;
  direction?: string;
}

interface IConditionProps {
  sort: ISortProps;
}

interface IPaginatedResultProps {
  totalCount: number;
  pageInfo: {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
  edges: Array<{
    node: PaginatedUserDoc | PaginatedProductDoc | PaginatedProjectDoc;
    cursor: string;
  }>;
}

const cursorPaginate = (
  result: PaginateResult<
    PaginatedUserDoc | PaginatedProductDoc | PaginatedProjectDoc
  >,
  conditions: IConditionProps
) => {
  const { totalDocs, hasPrevPage, hasNextPage } = result;
  const { sort } = conditions;
  const copiedDocs = [...result.docs];
  const sortedDocs = sortDocuments(copiedDocs, sort);

  const edges = sortedDocs.map((node) => ({
    node,
    cursor: createCursor(node.createdAt),
  }));

  const length: number = edges.length;

  const paginatedResult: IPaginatedResultProps = {
    totalCount: totalDocs,
    pageInfo: {
      hasPreviousPage: hasPrevPage,
      hasNextPage,
      startCursor: length > 0 ? edges[0].cursor : null,
      endCursor: length > 0 ? edges[length - 1].cursor : null,
    },
    edges,
  };

  return paginatedResult;
};

const sortDocuments = (
  docs: Array<PaginatedUserDoc | PaginatedProductDoc | PaginatedProjectDoc>,
  sort: ISortProps
) => {
  const { column } = sort;
  const direction: string = normalizeOrderBy(sort.direction);

  switch (column) {
    case 'createdAt':
      if (direction === 'asc') {
        docs.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));
      } else {
        // default ordered by descending
        docs.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
      }
      break;
    case 'averageRatings':
      if (!isProductDocs(docs)) {
        throw new Error('Incorrect sort field found: averageRatings');
      }
      if (direction === 'asc') {
        docs.sort((a, b) => a.ratings - b.ratings);
      } else {
        // default ordered by descending
        docs.sort((a, b) => b.ratings - a.ratings);
      }
      break;
    default: // Debug message
      console.log('Unknown sort field found. Please check again.');
      break;
  }

  return docs;
};

const isProductDocs = (
  docs: Array<unknown>
): docs is Array<PaginatedProductDoc> =>
  (docs as Array<PaginatedProductDoc>)[0].gtin !== undefined;

export const createCursor = (param: string) => {
  const payload = [param];

  return serializeCursor(payload);
};

const serializeCursor = (param: object) =>
  Buffer.from(JSON.stringify(param)).toString('base64');

export const parseCursor = (cursor: string): void | string[] | null => {
  if (!cursor) {
    return null;
  }

  if (!isString(cursor)) {
    throw new Error('before or after must be a string');
  }

  try {
    return JSON.parse(Buffer.from(cursor, 'base64').toString('utf8'));
  } catch (error) {
    return null;
  }
};

export default cursorPaginate;
