import { gql } from "@apollo/client";

export const CREATESECTION = gql`
  mutation CREATESECTION(
    $courseId: String
    $title: String
    $description: String
  ) {
    create_coursesection(
      inputs: { course_id: $courseId, title: $title, description: $description }
    ) {
      data {
        id
      }
    }
  }
`;
