import { gql } from "@apollo/client";

export const CREATEDISCUSSION = gql`
  mutation CREATEDISCUSSION(
    $userId: String
    $courseId: String
    $title: String
    $description: String
  ) {
    create_discussiontopic(
      inputs: {
        user_id: $userId
        course_id: $courseId
        title: $title
        description: $description
      }
    ) {
      affected_rows
    }
  }
`;
