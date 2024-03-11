import { gql } from "@apollo/client";

export const GETCOMMENT = gql`
  query GETCOMMENT($episodeId: String) {
    comment(where: { section_id: { exact: $episodeId" } }) {
      id
      comment
      user {
        email
        studentprofile {
          first_name
          last_name
        }
      }
      updated_at
    }
  }
`;
