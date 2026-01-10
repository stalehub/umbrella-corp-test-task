import { TLoginInfo } from '@/@types/types';
import User from '@server/models/userModel';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

const typeDef = `
login(
    username: String!
    password: String!
  ): Token
`;

const resolver = async (_root: string, args: TLoginInfo) => {
  try {
    const foundUser = await User.findOne({
      username: args.username,
    });

    if (!foundUser) {
      throw new GraphQLError(
        'Validatation failed, please check all required fields',
        {
          extensions: {
            code: 'BAD_USER_INPUT',
            reason:
              'Missing parameter, invalid field argument or user data already deleted.',
          },
        }
      );
    }
    const validated = bcrypt.compareSync(args.password, foundUser.passwordHash);

    if (!validated) {
      // Avoid hackers know "password value invalid
      // but username is right" form message.
      throw new GraphQLError(
        'Validatation failed, please check all required fields',
        {
          extensions: {
            code: 'BAD_USER_INPUT',
            reason:
              'Missing parameter, invalid field argument or user data already deleted.',
          },
        }
      );
    }

    const payload: { username: string; id: string } = {
      username: foundUser.username,
      id: foundUser._id,
    };

    const secret: string = import.meta.env.VITE_JWT_SEC;

    const token = jwt.sign(payload, secret, { expiresIn: '1d' });
    return { value: token };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to validate account';
    throw new GraphQLError(message, {
      extensions: {
        code: 'GRAPHQL_VALIDATION_FAILED',
      },
    });
  }
};

export default {
  typeDef,
  resolver,
};
