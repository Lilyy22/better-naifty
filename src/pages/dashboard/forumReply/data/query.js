import { gql } from "@apollo/client";

export const GETTOPICREPLY = gql`
  query GETTOPICREPLY($forumId: String) {
    discussion_comment(where: { topic_id: { exact: $forumId } }) {
      id
      reply_text
      updated_at
      user {
        studentprofile {
          first_name
          last_name
          profile_picture
        }
      }
    }
  }
`;
