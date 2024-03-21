import { gql } from "@apollo/client";

export const CREATEEPISODE = gql`
  mutation CREATEEPISODE(
    $title: String
    $description: String
    $file: String
    $sectionId: String
  ) {
    create_curseepisode(
      inputs: {
        title: $title
        description: $description
        file: $file
        section_id: $sectionId
      }
    ) {
      affected_rows
    }
  }
`;

export const DELETEEPISODE = gql`
  mutation DELETEEPISODE($episodeId: String) {
    delete_curseepisode(where: { id: { exact: $episodeId } }) {
      affected_rows
    }
  }
`;
