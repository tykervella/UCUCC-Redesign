import { gql } from '@apollo/client';


export const QUERY_PAGE = gql`
 query Query(
  $pageName: String!
  ) {
  page(
    pageName: $pageName
    ) {
    pageName
    pageText
    pageTitle
  }
}
`;
