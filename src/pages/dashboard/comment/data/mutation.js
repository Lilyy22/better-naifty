import { gql } from "@apollo/client";

export const CREATECOMMENT = gql`
  mutation CREATECOMMENT(
    $sectionId: String
    $userId: String
    $comment: String
  ) {
    create_comment(
      inputs: { section_id: $sectionId, user_id: $userId, comment: $comment }
    ) {
      affected_rows
    }
  }
`;
