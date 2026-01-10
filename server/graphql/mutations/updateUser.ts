import { IServerContext, IUpdateUserInfo } from '@/@types/types';
import User from '@server/models/userModel';
import AuthencationValidator from '@server/utils/AuthencationValidator';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

const typeDef = `
updateUser(
    id: ID!
    password: String
    email: String
    phone: String
    fullName: String
  ): User
`;

const resolver = async (
  _root: string,
  args: IUpdateUserInfo,
  { currentUser }: IServerContext
) => {
  if (!AuthencationValidator(currentUser)) return;

  const { id, email, phone, password, fullName } = args;
  let updatedUser;

  try {
    // full-fledged validation is necessary
    const foundUser = await User.findById({ _id: id });

    if (!foundUser) {
      throw new GraphQLError('Invalid id, user data may has been deleted', {
        extensions: {
          code: 'BAD_USER_INPUT',
        },
      });
    }

    if (password) {
      foundUser.passwordHash = await bcrypt.hash(password, 10);
    }

    foundUser.email = email ? email : foundUser.email;
    foundUser.phone = phone ? phone : foundUser.phone;
    foundUser.fullName = fullName ? fullName : foundUser.fullName;

    updatedUser = await foundUser.save();
  } catch (error) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return updatedUser;
};

export default {
  typeDef,
  resolver,
};
