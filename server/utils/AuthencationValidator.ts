import { IUserSchema } from '@/@types/types';
import { GraphQLError } from 'graphql';

const AuthencationValidator = (currentUser?: IUserSchema) => {
  // Validated user allowed only
  if (!currentUser) {
    throw new GraphQLError('You are not authorized to perform this action.', {
      extensions: {
        code: 'UNAUTHENTICATED',
      },
    });
  }

  return true;
};

export default AuthencationValidator;
