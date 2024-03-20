import { gql } from "@apollo/client";

export const COURSECOUNT = gql`
  query COURSECOUNT($userId: String) {
    course_aggregate(where: { instructor_id: { exact: $userId } }) {
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
