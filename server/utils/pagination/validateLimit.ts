import { isNumber } from 'lodash';

const limitValidator = (first?: number): number => {
  const limit: number = first || 10;

  if (!isNumber(limit)) {
    throw new Error('first must be a positive number.');
  }

  if (limit < 0 || limit > 100) {
    throw new Error(
      'first must be greater than 0 and less than or equal to 100'
    );
  }

  return limit;
};

export default limitValidator;
