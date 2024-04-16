import { gql } from "@apollo/client";

export const CREATEREPLY = gql`
  mutation CREATEREPLY($userId: String, $topicId: String, $reply: String) {
    create_discussioncomment(
      inputs: { user_id: $userId, topic_id: $topicId, reply_text: $reply }
    ) {
      affected_rows
    }
  }
`;
