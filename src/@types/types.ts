import { AllProjectsOrderBy, OrderDirection } from '@/gql/graphql';
import { Document, PaginateOptions, Types } from 'mongoose';

// Define omit type for unions
// Refer to https://github.com/microsoft/TypeScript/issues/42680
export type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;

interface IBaseDate {
  createdAt: string;
  updatedAt?: string;
}

export interface IFounder {
  id: number;
  founderName: string;
  portrait: string;
  occupation: string[];
  intro: string;
}

export type TProduct = UnionOmit<IProductSchema, 'createdAt' | 'updatedAt'>;

export interface INotify {
  message: string;
  success?: boolean;
}

export interface IDocument {
  id: string;
  umFileId: string;
  authors?: Array<string>;
  fileName: string;
  content: Array<{
    pageNum: number;
    title?: string;
    paragraph1: string;
    paragraph2?: string;
    paragraph3?: string;
    paragraph4?: string;
    paragraph5?: string;
  }>;
  imgUrls?: Array<string>;
  date: string;
}

export interface BOWProps extends UnionOmit<IBOWSchema, 'createdAt'> {}

export interface IProject extends IBaseDate {
  id: string;
  projectName: string;
  description: string;
  models: Array<BOWProps>;
}

export interface IBaseProjectQuery {
  searchKeyword?: string;
  orderBy: AllProjectsOrderBy;
  orderDirection: OrderDirection;
}

export interface IProjectQueryVars extends IBaseProjectQuery {
  first: number;
  offset?: number;
}

//======================= Back-end =======================
interface IBaseUser extends IBaseDate {
  username: string;
  email?: string;
  phone?: string;
  fullName?: string;
}

export interface IRegUser extends IBaseUser {
  password: string;
}

// Mongoose Schema interface
export interface IUserSchema extends IBaseUser {
  passwordHash: string;
  // Use `Types.ObjectId` in document interface
  organization?: Types.ObjectId;
}

export interface IEmployeeSchema extends IBaseDate {
  organizationName: string;
  employeeName: string;
  employeeNumber: string;
  sex: string;
  unit: string;
  idCard: {
    cardNumber: number;
    securityLevel: string;
  };
}

export interface IProductSchema extends IBaseDate {
  gtin: string;
  name: string;
  slogan?: string;
  imgUrl: string;
  description: string;
  info: {
    pulishedDate: string;
    manufacturer: string;
  };
  genre: string;
  listPrice: number;
  ratings: number;
}

export interface IProjectSchema extends IBaseDate {
  projectName: string;
  description: string;
  models: Array<Types.ObjectId>;
  creationDate: string;
}

export interface IBOWSchema extends IBaseDate {
  codeName: string;
  version: string;
  based?: Array<string | null> | null;
  height?: string | null;
  length?: string | null;
  mass?: string | null;
  creationDate?: string | null;
  createdVia?: Array<string | null> | null;
  characteristics: string;
  experimentalType: boolean;
  massProducted: boolean;
  imgUrl: string;
}

// For Mongoose pagination plugin
export interface IUserDocument extends Document, IUserSchema {}
export interface IProjectDocument extends Document, IProjectSchema {}
export interface IEmployeeDocument extends Document, IEmployeeSchema {}
export interface IProductDocument extends Document, IProductSchema {}
export interface IBowModelDocument extends Document, IBOWSchema {}
// For @server/utils/pagination/cursorPaginate.ts
type PaginatedDoc<T> = Document<unknown, PaginateOptions, T> & {
  _id: Types.ObjectId;
};
export type PaginatedUserDoc = PaginatedDoc<IUserDocument> & IUserDocument;
export type PaginatedProductDoc = PaginatedDoc<IProductDocument> &
  IProductDocument;
export type PaginatedProjectDoc = PaginatedDoc<IProjectDocument> &
  IProjectDocument;

export interface IUpdateUserInfo
  extends UnionOmit<IUserSchema, 'username' | 'passwordHash'> {
  id: string;
  password: string;
}

export type TLoginInfo = Pick<IRegUser, 'username' | 'password'>;

export interface IServerContext {
  currentUser?: IUserSchema;
}

export interface ICreateBOW extends IBOWSchema {
  projectName: string;
}

export interface ICreateProject extends UnionOmit<IProjectSchema, 'models'> {}
