import { gql } from "@apollo/client";

export const GETSTUDENTPROFILE = gql`
  query GETSTUDENTPROFILE($userId: String) {
    student_profile(where: { user: { exact: $userId } }) {
      id
      first_name
      last_name
      bio
      profile_picture
      created_at
      updated_at
      user {
        email
        is_instructor
      }
    }
  }
`;
