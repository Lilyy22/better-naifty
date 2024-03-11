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
