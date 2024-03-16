import { gql } from "@apollo/client";

export const GETCOMMENT = gql`
  query GETCOMMENT($episodeId: String) {
    comment(where: { episode_id: { exact: $episodeId } }) {
      id
      comment
      user {
        email
        studentprofile {
          profile_picture
          first_name
          last_name
        }
      }
      updated_at
    }
  }
`;

export const GETCOMMENTCOUNT = gql`
  query GETCOMMENTCOUNT($episodeId: String) {
    comment_aggregate(where: { episode_id: { exact: $episodeId } }) {
      count
    }
  }
`;
