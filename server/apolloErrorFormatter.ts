import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { Error } from 'mongoose';

/**
 * Returns a user-friendly message when error occured.
 *
 * @param error
 * @returns formatted error
 */
const apolloErrorFormatter = (
  formattedError: GraphQLFormattedError,
  error: unknown
) => {
  let normalizedError;

  if (error instanceof Error) {
    normalizedError = new GraphQLError('Unexpected Error occured', {
      extensions: { code: 'INTERNAL_SERVER_ERROR' },
    });
  } else {
    // Includes MongooseError instances
    const reason = formattedError.extensions?.reason;
    let message = '';

    switch (formattedError.extensions?.code) {
      case 'UNAUTHENTICATED':
        message =
          'Permission denied. You are not authorized to execute this operation.';
        break;
      case ApolloServerErrorCode.BAD_USER_INPUT:
        if (reason && typeof reason === 'string') {
          if (reason.includes('not found')) {
            message = 'You requested data not found. Please check again.';
          }
        }

        break;
      /*case ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED:
        message = "Validation failed. Please check again.";
        break;*/
    }

    normalizedError = message ? { ...formattedError, message } : formattedError;
  }

  return normalizedError;
};

export default apolloErrorFormatter;
