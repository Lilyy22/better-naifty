import { gql } from "@apollo/client";

export const COURSECOUNT = gql`
  query COURSECOUNT($userId: String, $status: String) {
    course_aggregate(
      where: { instructor_id: { exact: $userId }, status: { exact: $status } }
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

export const TOTALSALES = gql`
  query TOTALSALES {
    course_enrollment(where: { status: { exact: "SUCCESS" } }) {
      id
      course {
        price
      }
    }
  }
`;

export const INSTTOTALSALES = gql`
  query INSTTOTALSALES($userId: String) {
    course(
      where: {
        instructor_id: { exact: $userId }
        status: { exact: "APPROVED" }
      }
    ) {
      enrollments {
        course {
          price
        }
      }
    }
  }
`;
