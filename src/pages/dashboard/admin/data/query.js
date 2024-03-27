import { gql } from "@apollo/client";

export const GETUSERS = gql`
  query GETUSERS($role: String) {
    users(where: { is_instructor: { exact: $role } }) {
      id
      email
      is_active
      is_instructor
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
  query GETCOURSE($offset: Int, $limit: Int, $status: String) {
    course(
      offset: $offset
      limit: $limit
      where: { status: { exact: $status } }
    ) {
      id
      name
      status
      is_approved
      enrollments {
        aggregate {
          count
        }
      }
      category {
        name
      }
      publish_date
    }
  }
`;
