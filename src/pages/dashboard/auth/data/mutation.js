import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation SIGNUP(
    $email: String!
    $password: String!
    $isInstructor: Boolean!
  ) {
    signup(email: $email, password: $password, is_instructor: $isInstructor) {
      data {
        id
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        is_instructor
      }
    }
  }
`;

export const REQUESTOTP = gql`
  mutation REQUESTOTP($email: String!) {
    request_otp(email: $email) {
      success
    }
  }
`;

export const VERIFYOTP = gql`
  mutation VERIFYOTP($email: String!, $otp: String!) {
    verify_otp(email: $email, otp: $otp) {
      success
    }
  }
`;
