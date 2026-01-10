import { OrderDirection } from '@/gql/graphql';

const normalizeOrderBy = (direction?: string) => {
  const directionValue: string = direction === 'desc' ? 'desc' : 'asc';

  switch (directionValue) {
    case OrderDirection.Asc:
    case OrderDirection.Desc:
      break;
    default:
      throw new Error('unknown order direction value.');
  }

  return directionValue.toString();
};

export default normalizeOrderBy;
