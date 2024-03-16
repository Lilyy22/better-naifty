import { gql } from "@apollo/client";

export const COURSECOUNT = gql`
  query COURSECOUNT($userId: String, $status: String) {
    course_aggregate(
      where: {
        instructor_id: { exact: $userId }
        is_approved: { exact: $status }
      }
    ) {
      count
    }
  }
`;

export const USERSCOUNT = gql`
  query USERSCOUNT($role: String) {
    users_aggregate(where: { is_instructor: { exact: $role } }) {
      count
    }
  }
`;
