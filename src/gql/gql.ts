/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment productFields on Product {\n    gtin\n    name\n    genre\n    listPrice\n    imgUrl\n    info {\n      manufacturer\n      pulishedDate\n    }\n    description\n    slogan\n    ratings\n  }\n": types.ProductFieldsFragmentDoc,
    "\n  fragment bowFields on BOW {\n    codeName\n    version\n    based\n    height\n    mass\n    createdVia\n    characteristics\n    experimentalType\n    massProducted\n    imgUrl\n  }\n": types.BowFieldsFragmentDoc,
    "\n  fragment projectFields on BOWProject {\n    id\n    projectName\n    description\n    models {\n      codeName\n      version\n      based\n      height\n      mass\n      createdVia\n      characteristics\n      experimentalType\n      massProducted\n      imgUrl\n    }\n    createdAt\n    updatedAt\n  }\n": types.ProjectFieldsFragmentDoc,
    "\n  fragment pageInfoFields on PageInfo {\n    startCursor\n    hasPreviousPage\n    hasNextPage\n    endCursor\n  }\n": types.PageInfoFieldsFragmentDoc,
    "\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      value\n    }\n  }\n": types.LoginDocument,
    "\n  query getLoggedInUser {\n    me {\n      username\n    }\n  }\n": types.GetLoggedInUserDocument,
    "\n  \n  \n  query getAllProductsQuery(\n    $searchKeyword: String\n    $first: Int\n    $after: String\n    $orderDirection: OrderDirection\n    $orderBy: AllProductsOrderBy\n  ) {\n    allProducts(\n      searchKeyword: $searchKeyword\n      first: $first\n      after: $after\n      orderDirection: $orderDirection\n      orderBy: $orderBy\n    ) {\n      edges {\n        node {\n          ...productFields\n        }\n        cursor\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n": types.GetAllProductsQueryDocument,
    "\n  \n  query getProductQuery($productId: ID!) {\n    findProductById(id: $productId) {\n      ...productFields\n    }\n  }\n": types.GetProductQueryDocument,
    "\n  \n  query allProjectsQuery(\n    $first: Int\n    $after: String\n    $offset: Int\n    $orderDirection: OrderDirection\n    $orderBy: AllProjectsOrderBy\n    $searchKeyword: String\n  ) {\n    allProjects(\n      first: $first\n      after: $after\n      offset: $offset\n      orderDirection: $orderDirection\n      orderBy: $orderBy\n      searchKeyword: $searchKeyword\n    ) {\n      edges {\n        node {\n          ...projectFields\n        }\n        cursor\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n": types.AllProjectsQueryDocument,
    "\n  \n  query findProjectQuery($projectId: ID!) {\n    findProjectById(id: $projectId) {\n      ...projectFields\n    }\n  }\n": types.FindProjectQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment productFields on Product {\n    gtin\n    name\n    genre\n    listPrice\n    imgUrl\n    info {\n      manufacturer\n      pulishedDate\n    }\n    description\n    slogan\n    ratings\n  }\n"): (typeof documents)["\n  fragment productFields on Product {\n    gtin\n    name\n    genre\n    listPrice\n    imgUrl\n    info {\n      manufacturer\n      pulishedDate\n    }\n    description\n    slogan\n    ratings\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment bowFields on BOW {\n    codeName\n    version\n    based\n    height\n    mass\n    createdVia\n    characteristics\n    experimentalType\n    massProducted\n    imgUrl\n  }\n"): (typeof documents)["\n  fragment bowFields on BOW {\n    codeName\n    version\n    based\n    height\n    mass\n    createdVia\n    characteristics\n    experimentalType\n    massProducted\n    imgUrl\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment projectFields on BOWProject {\n    id\n    projectName\n    description\n    models {\n      codeName\n      version\n      based\n      height\n      mass\n      createdVia\n      characteristics\n      experimentalType\n      massProducted\n      imgUrl\n    }\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment projectFields on BOWProject {\n    id\n    projectName\n    description\n    models {\n      codeName\n      version\n      based\n      height\n      mass\n      createdVia\n      characteristics\n      experimentalType\n      massProducted\n      imgUrl\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment pageInfoFields on PageInfo {\n    startCursor\n    hasPreviousPage\n    hasNextPage\n    endCursor\n  }\n"): (typeof documents)["\n  fragment pageInfoFields on PageInfo {\n    startCursor\n    hasPreviousPage\n    hasNextPage\n    endCursor\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      value\n    }\n  }\n"): (typeof documents)["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getLoggedInUser {\n    me {\n      username\n    }\n  }\n"): (typeof documents)["\n  query getLoggedInUser {\n    me {\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  \n  query getAllProductsQuery(\n    $searchKeyword: String\n    $first: Int\n    $after: String\n    $orderDirection: OrderDirection\n    $orderBy: AllProductsOrderBy\n  ) {\n    allProducts(\n      searchKeyword: $searchKeyword\n      first: $first\n      after: $after\n      orderDirection: $orderDirection\n      orderBy: $orderBy\n    ) {\n      edges {\n        node {\n          ...productFields\n        }\n        cursor\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  \n  query getAllProductsQuery(\n    $searchKeyword: String\n    $first: Int\n    $after: String\n    $orderDirection: OrderDirection\n    $orderBy: AllProductsOrderBy\n  ) {\n    allProducts(\n      searchKeyword: $searchKeyword\n      first: $first\n      after: $after\n      orderDirection: $orderDirection\n      orderBy: $orderBy\n    ) {\n      edges {\n        node {\n          ...productFields\n        }\n        cursor\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  query getProductQuery($productId: ID!) {\n    findProductById(id: $productId) {\n      ...productFields\n    }\n  }\n"): (typeof documents)["\n  \n  query getProductQuery($productId: ID!) {\n    findProductById(id: $productId) {\n      ...productFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  query allProjectsQuery(\n    $first: Int\n    $after: String\n    $offset: Int\n    $orderDirection: OrderDirection\n    $orderBy: AllProjectsOrderBy\n    $searchKeyword: String\n  ) {\n    allProjects(\n      first: $first\n      after: $after\n      offset: $offset\n      orderDirection: $orderDirection\n      orderBy: $orderBy\n      searchKeyword: $searchKeyword\n    ) {\n      edges {\n        node {\n          ...projectFields\n        }\n        cursor\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query allProjectsQuery(\n    $first: Int\n    $after: String\n    $offset: Int\n    $orderDirection: OrderDirection\n    $orderBy: AllProjectsOrderBy\n    $searchKeyword: String\n  ) {\n    allProjects(\n      first: $first\n      after: $after\n      offset: $offset\n      orderDirection: $orderDirection\n      orderBy: $orderBy\n      searchKeyword: $searchKeyword\n    ) {\n      edges {\n        node {\n          ...projectFields\n        }\n        cursor\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  query findProjectQuery($projectId: ID!) {\n    findProjectById(id: $projectId) {\n      ...projectFields\n    }\n  }\n"): (typeof documents)["\n  \n  query findProjectQuery($projectId: ID!) {\n    findProjectById(id: $projectId) {\n      ...projectFields\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;