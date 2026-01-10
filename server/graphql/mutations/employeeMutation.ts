import { IEmployeeSchema, IServerContext } from '@/@types/types';
import Organization from '@server/models/organizationModel';
import User from '@server/models/userModel';
import AuthencationValidator from '@server/utils/AuthencationValidator';
import { GraphQLError } from 'graphql';

const typeDef = `
  input UmIDCardInput {
    cardNumber: Int!
    securityLevel: String!
  }

  input updateOrganizationInput {
    organizationName: String
    employeeName: String!
    employeeNumber: String
    sex: String
    unit: String
    idCard: UmIDCardInput
  }

  extend type Mutation {
    updateOrCreateEmployee(content: updateOrganizationInput): Employee
  }
`;

const resolver = async (
  _root: string,
  args: { content: IEmployeeSchema },
  { currentUser }: IServerContext
) => {
  if (!AuthencationValidator(currentUser)) return;

  const { organizationName, employeeName, employeeNumber, sex, unit, idCard } =
    args.content;
  let updatedEmployee;

  try {
    const foundEmployee = await Organization.findOne({ employeeName });

    if (foundEmployee) {
      foundEmployee.organizationName = organizationName
        ? organizationName
        : foundEmployee.organizationName;
      foundEmployee.employeeName = employeeName
        ? employeeName
        : foundEmployee.employeeName;
      foundEmployee.employeeNumber = employeeNumber
        ? employeeNumber
        : foundEmployee.employeeNumber;
      foundEmployee.sex = sex ? sex : foundEmployee.sex;
      foundEmployee.unit = unit ? unit : foundEmployee.unit;
      foundEmployee.idCard = idCard ? idCard : foundEmployee.idCard;
      foundEmployee.updatedAt = new Date().toUTCString();

      foundEmployee.save();

      updatedEmployee = foundEmployee;
    } else {
      if (!employeeName) {
        throw new GraphQLError('employee name field must be filled', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        });
      }
      const foundUser = await User.findOne({ fullName: employeeName });

      if (!foundUser) {
        throw new GraphQLError('User not exist in employee list', {
          extensions: {
            code: 'NOT_FOUND_ERROR',
          },
        });
      }

      const newEmployee = new Organization({
        organizationName,
        employeeName,
        employeeNumber,
        sex,
        unit,
        idCard,
        createdAt: new Date().toUTCString(),
      });

      await newEmployee.save();

      foundUser.organization = newEmployee.id;
      await foundUser.save();

      updatedEmployee = newEmployee;
    }
  } catch (error) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return updatedEmployee;
};

export default {
  typeDef,
  resolver,
};
