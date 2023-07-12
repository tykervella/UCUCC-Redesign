import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(
    $email: String!, 
    $password: String!
    ) {
    login(
      email: $email, 
      password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_PAGE = gql`
mutation Mutation(
  $pageName: String!, 
  $pageTitle: String!, 
  $pageText: String!) {
  updatePage(
    pageName: $pageName, 
    pageTitle: $pageTitle, 
    pageText: $pageText) {
    pageName
    pageText
    pageTitle
  }
}`

