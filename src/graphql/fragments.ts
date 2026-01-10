import { graphql } from '@/gql';

export const ProductFragment = graphql(`
  fragment productFields on Product {
    gtin
    name
    genre
    listPrice
    imgUrl
    info {
      manufacturer
      pulishedDate
    }
    description
    slogan
    ratings
  }
`);

export const BOWFragment = graphql(`
  fragment bowFields on BOW {
    codeName
    version
    based
    height
    mass
    createdVia
    characteristics
    experimentalType
    massProducted
    imgUrl
  }
`);

export const ProjectFragment = graphql(`
  fragment projectFields on BOWProject {
    id
    projectName
    description
    models {
      codeName
      version
      based
      height
      mass
      createdVia
      characteristics
      experimentalType
      massProducted
      imgUrl
    }
    createdAt
    updatedAt
  }
`);

export const PageInfoFragment = graphql(`
  fragment pageInfoFields on PageInfo {
    startCursor
    hasPreviousPage
    hasNextPage
    endCursor
  }
`);
