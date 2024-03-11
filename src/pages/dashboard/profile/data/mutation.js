import { gql } from "@apollo/client";

export const CREATESTUDENTPROFILE = gql`
  mutation STUDENTPROFILE(
    $userId: String
    $firstName: String
    $lastName: String
    $bio: String
    $profilePicture: String
  ) {
    create_studentprofile(
      inputs: {
        user_id: $userId
        first_name: $firstName
        last_name: $lastName
        bio: $bio
        profile_picture: $profilePicture
      }
    ) {
      data {
        id
      }
    }
  }
`;

export const UPDATESTUDENTPROFILE = gql`
  mutation UPDATESTUDENTPROFILE(
    $userId: String
    $firstName: String
    $lastName: String
    $bio: String
    $profilePicture: String
  ) {
    update_studentprofile(
      where: { user: { exact: $userId } }
      input: {
        user_id: $userId
        first_name: $firstName
        last_name: $lastName
        bio: $bio
        profile_picture: $profilePicture
      }
    ) {
      data {
        id
      }
    }
  }
`;
