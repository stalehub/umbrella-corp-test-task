/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum AllProductsOrderBy {
  AverageRatings = 'averageRatings',
  CreatedAt = 'createdAt'
}

export enum AllProjectsOrderBy {
  CreatedAt = 'createdAt'
}

export type Bow = {
  __typename?: 'BOW';
  based?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  characteristics: Scalars['String']['output'];
  codeName: Scalars['String']['output'];
  createdVia?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  experimentalType: Scalars['Boolean']['output'];
  height?: Maybe<Scalars['String']['output']>;
  imgUrl: Scalars['String']['output'];
  mass?: Maybe<Scalars['String']['output']>;
  massProducted: Scalars['Boolean']['output'];
  version: Scalars['String']['output'];
};

export type BowProject = {
  __typename?: 'BOWProject';
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  models: Array<Bow>;
  projectName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Employee = {
  __typename?: 'Employee';
  employeeName: Scalars['String']['output'];
  employeeNumber: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  idCard: UmIdCard;
  organizationName: Scalars['String']['output'];
  sex: Scalars['String']['output'];
  unit: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBOW?: Maybe<Bow>;
  createProduct?: Maybe<Product>;
  createProject?: Maybe<BowProject>;
  createUser?: Maybe<User>;
  login?: Maybe<Token>;
  updateOrCreateEmployee?: Maybe<Employee>;
  updateUser?: Maybe<User>;
};


export type MutationCreateBowArgs = {
  based?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  characteristics: Scalars['String']['input'];
  codeName: Scalars['String']['input'];
  createdVia?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  experimentalType: Scalars['Boolean']['input'];
  height?: InputMaybe<Scalars['String']['input']>;
  imgUrl: Scalars['String']['input'];
  mass?: InputMaybe<Scalars['String']['input']>;
  massProducted: Scalars['Boolean']['input'];
  projectName: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


export type MutationCreateProductArgs = {
  description: Scalars['String']['input'];
  genre: Scalars['String']['input'];
  gtin: Scalars['String']['input'];
  imgUrl: Scalars['String']['input'];
  info: ProductInfoInput;
  listPrice: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  ratings?: InputMaybe<Scalars['Float']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProjectArgs = {
  description: Scalars['String']['input'];
  projectName: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateOrCreateEmployeeArgs = {
  content?: InputMaybe<UpdateOrganizationInput>;
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String']['output'];
  genre: Scalars['String']['output'];
  gtin: Scalars['String']['output'];
  imgUrl: Scalars['String']['output'];
  info: ProductInfo;
  listPrice: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  ratings?: Maybe<Scalars['Float']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges: Array<ProductEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ProductInfo = {
  __typename?: 'ProductInfo';
  manufacturer: Scalars['String']['output'];
  pulishedDate: Scalars['String']['output'];
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String']['output'];
  node: BowProject;
};

export type Query = {
  __typename?: 'Query';
  /** Returns paginated products. */
  allProducts: ProductConnection;
  /** Returns paginated projects. */
  allProjects?: Maybe<ProjectConnection>;
  /** Returns paginated users. */
  allUsers: UserConnection;
  bowCount?: Maybe<Scalars['Int']['output']>;
  findEmployee?: Maybe<Employee>;
  /** Returns product by an id. */
  findProductById?: Maybe<Product>;
  findProjectById?: Maybe<BowProject>;
  findUser?: Maybe<User>;
  me?: Maybe<User>;
  projectCount?: Maybe<Scalars['Int']['output']>;
  userCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryAllProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AllProductsOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  searchKeyword?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AllProjectsOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  searchKeyword?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFindEmployeeArgs = {
  employeeName: Scalars['String']['input'];
};


export type QueryFindProductByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindProjectByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindUserArgs = {
  id: Scalars['ID']['input'];
};

export type Token = {
  __typename?: 'Token';
  value: Scalars['String']['output'];
};

export type UmIdCard = {
  __typename?: 'UmIDCard';
  cardNumber: Scalars['Int']['output'];
  securityLevel: Scalars['String']['output'];
};

export type UmIdCardInput = {
  cardNumber: Scalars['Int']['input'];
  securityLevel: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type ProductInfoInput = {
  manufacturer: Scalars['String']['input'];
  pulishedDate: Scalars['String']['input'];
};

export type UpdateOrganizationInput = {
  employeeName: Scalars['String']['input'];
  employeeNumber?: InputMaybe<Scalars['String']['input']>;
  idCard?: InputMaybe<UmIdCardInput>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFieldsFragment = { __typename?: 'Product', gtin: string, name: string, genre: string, listPrice: number, imgUrl: string, description: string, slogan?: string | null, ratings?: number | null, info: { __typename?: 'ProductInfo', manufacturer: string, pulishedDate: string } } & { ' $fragmentName'?: 'ProductFieldsFragment' };

export type BowFieldsFragment = { __typename?: 'BOW', codeName: string, version: string, based?: Array<string | null> | null, height?: string | null, mass?: string | null, createdVia?: Array<string | null> | null, characteristics: string, experimentalType: boolean, massProducted: boolean, imgUrl: string } & { ' $fragmentName'?: 'BowFieldsFragment' };

export type ProjectFieldsFragment = { __typename?: 'BOWProject', id: string, projectName: string, description: string, createdAt: string, updatedAt?: string | null, models: Array<{ __typename?: 'BOW', codeName: string, version: string, based?: Array<string | null> | null, height?: string | null, mass?: string | null, createdVia?: Array<string | null> | null, characteristics: string, experimentalType: boolean, massProducted: boolean, imgUrl: string }> } & { ' $fragmentName'?: 'ProjectFieldsFragment' };

export type PageInfoFieldsFragment = { __typename?: 'PageInfo', startCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean, endCursor?: string | null } & { ' $fragmentName'?: 'PageInfoFieldsFragment' };

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'Token', value: string } | null };

export type GetLoggedInUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoggedInUserQuery = { __typename?: 'Query', me?: { __typename?: 'User', username: string } | null };

export type GetAllProductsQueryQueryVariables = Exact<{
  searchKeyword?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<OrderDirection>;
  orderBy?: InputMaybe<AllProductsOrderBy>;
}>;


export type GetAllProductsQueryQuery = { __typename?: 'Query', allProducts: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', cursor: string, node: (
        { __typename?: 'Product' }
        & { ' $fragmentRefs'?: { 'ProductFieldsFragment': ProductFieldsFragment } }
      ) }>, pageInfo: (
      { __typename?: 'PageInfo' }
      & { ' $fragmentRefs'?: { 'PageInfoFieldsFragment': PageInfoFieldsFragment } }
    ) } };

export type GetProductQueryQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type GetProductQueryQuery = { __typename?: 'Query', findProductById?: (
    { __typename?: 'Product' }
    & { ' $fragmentRefs'?: { 'ProductFieldsFragment': ProductFieldsFragment } }
  ) | null };

export type AllProjectsQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderDirection?: InputMaybe<OrderDirection>;
  orderBy?: InputMaybe<AllProjectsOrderBy>;
  searchKeyword?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllProjectsQueryQuery = { __typename?: 'Query', allProjects?: { __typename?: 'ProjectConnection', edges: Array<{ __typename?: 'ProjectEdge', cursor: string, node: (
        { __typename?: 'BOWProject' }
        & { ' $fragmentRefs'?: { 'ProjectFieldsFragment': ProjectFieldsFragment } }
      ) }>, pageInfo: (
      { __typename?: 'PageInfo' }
      & { ' $fragmentRefs'?: { 'PageInfoFieldsFragment': PageInfoFieldsFragment } }
    ) } | null };

export type FindProjectQueryQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type FindProjectQueryQuery = { __typename?: 'Query', findProjectById?: (
    { __typename?: 'BOWProject' }
    & { ' $fragmentRefs'?: { 'ProjectFieldsFragment': ProjectFieldsFragment } }
  ) | null };

export const ProductFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gtin"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"listPrice"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manufacturer"}},{"kind":"Field","name":{"kind":"Name","value":"pulishedDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"}}]}}]} as unknown as DocumentNode<ProductFieldsFragment, unknown>;
export const BowFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BOW"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"codeName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"based"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mass"}},{"kind":"Field","name":{"kind":"Name","value":"createdVia"}},{"kind":"Field","name":{"kind":"Name","value":"characteristics"}},{"kind":"Field","name":{"kind":"Name","value":"experimentalType"}},{"kind":"Field","name":{"kind":"Name","value":"massProducted"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<BowFieldsFragment, unknown>;
export const ProjectFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BOWProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"models"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"codeName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"based"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mass"}},{"kind":"Field","name":{"kind":"Name","value":"createdVia"}},{"kind":"Field","name":{"kind":"Name","value":"characteristics"}},{"kind":"Field","name":{"kind":"Name","value":"experimentalType"}},{"kind":"Field","name":{"kind":"Name","value":"massProducted"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ProjectFieldsFragment, unknown>;
export const PageInfoFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pageInfoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PageInfoFieldsFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetLoggedInUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLoggedInUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<GetLoggedInUserQuery, GetLoggedInUserQueryVariables>;
export const GetAllProductsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllProductsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchKeyword"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AllProductsOrderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchKeyword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchKeyword"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"pageInfoFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gtin"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"listPrice"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manufacturer"}},{"kind":"Field","name":{"kind":"Name","value":"pulishedDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pageInfoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<GetAllProductsQueryQuery, GetAllProductsQueryQueryVariables>;
export const GetProductQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gtin"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"listPrice"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manufacturer"}},{"kind":"Field","name":{"kind":"Name","value":"pulishedDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"}}]}}]} as unknown as DocumentNode<GetProductQueryQuery, GetProductQueryQueryVariables>;
export const AllProjectsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allProjectsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AllProjectsOrderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchKeyword"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchKeyword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchKeyword"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"pageInfoFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BOWProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"models"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"codeName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"based"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mass"}},{"kind":"Field","name":{"kind":"Name","value":"createdVia"}},{"kind":"Field","name":{"kind":"Name","value":"characteristics"}},{"kind":"Field","name":{"kind":"Name","value":"experimentalType"}},{"kind":"Field","name":{"kind":"Name","value":"massProducted"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pageInfoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<AllProjectsQueryQuery, AllProjectsQueryQueryVariables>;
export const FindProjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findProjectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findProjectById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BOWProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"models"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"codeName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"based"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mass"}},{"kind":"Field","name":{"kind":"Name","value":"createdVia"}},{"kind":"Field","name":{"kind":"Name","value":"characteristics"}},{"kind":"Field","name":{"kind":"Name","value":"experimentalType"}},{"kind":"Field","name":{"kind":"Name","value":"massProducted"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<FindProjectQueryQuery, FindProjectQueryQueryVariables>;