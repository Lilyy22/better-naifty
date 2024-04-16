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

export const UPDATEDISCUSSION = gql`
  mutation UPDATEDISCUSSION(
    $topicId: String
    $title: String
    $description: String
  ) {
    update_discussiontopic(
      input: { title: $title, description: $description }
      where: { id: { exact: $topicId } }
    ) {
      affected_rows
    }
  }
`;

export const DELETEDISCUSSION = gql`
  mutation DELETEDISCUSSION($topicId: String) {
    delete_discussiontopic(where: { id: { exact: $topicId } }) {
      affected_rows
    }
  }
`;
