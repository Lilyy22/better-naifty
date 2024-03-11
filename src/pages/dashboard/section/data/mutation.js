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

export const DELETESECTION = gql`
  mutation DELETESECTION($sectionId: String) {
    delete_coursesection(where: { id: { exact: $sectionId } }) {
      affected_rows
    }
  }
`;
