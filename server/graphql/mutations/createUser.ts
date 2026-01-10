import { IRegUser } from '@/@types/types';
import User from '@server/models/userModel';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

const typeDef = `
createUser(
    username: String!
    password: String!
    email: String
    phone: String
    fullName: String
    ): User
`;

const resolver = async (_root: string, args: IRegUser) => {
  const { username, password } = args;

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      passwordHash,
      email: args.email || '',
      phone: args.phone || '',
      fullName: args.fullName || '',
      createdAt: new Date().toUTCString(),
    });
    await user.save();
    return user;
  } catch (error) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }
};

export default {
  typeDef,
  resolver,
};
