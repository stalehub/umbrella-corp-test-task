import { parseCursor } from '@server/utils/pagination/cursorPaginate';

const validateCursor = (before?: string, after?: string) => {
  return after ? parseCursor(after) : before ? parseCursor(before) : null;
};

export default validateCursor;
