import { gql } from "@apollo/client";

export const CREATECOMMENT = gql`
  mutation CREATECOMMENT(
    $episodeId: String
    $userId: String
    $comment: String
  ) {
    create_comment(
      inputs: { episode_id: $episodeId, user_id: $userId, comment: $comment }
    ) {
      affected_rows
    }
  }
`;
