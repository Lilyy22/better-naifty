import { gql } from "@apollo/client";

export const GETUSERS = gql`
  query GETUSERS {
    users {
      id
      email
      is_active
      is_instructor
      is_approved
      studentprofile {
        first_name
        last_name
        bio
        profile_picture
      }
    }
  }
`;

export const GETCOURSE = gql`
  query GETCOURSE($offset: Int, $limit: Int) {
    course(offset: $offset, limit: $limit) {
      id
      name
      status
      is_approved
      category {
        name
      }
      publish_date
    }
  }
`;
