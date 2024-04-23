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

export const CREATEEPISODEPROGRESS = gql`
  mutation ($episodeId: String, $userId: String, $courseStarted: Boolean) {
    create_courseprogress(
      inputs: {
        episode_id: $episodeId
        user_id: $userId
        course_started: $courseStarted
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATEEPISODEPROGRESS = gql`
  mutation ($progressId: String, $courseFinished: Boolean) {
    update_courseprogress(
      input: { course_finished: $courseFinished }
      where: { id: { exact: $progressId } }
    ) {
      affected_rows
    }
  }
`;

export const UPDATEEPISODE = gql`
  mutation UPDATEEPISODE(
    $episodeId: String
    $title: String
    $description: String
    $file: String
  ) {
    update_curseepisode(
      input: { title: $title, description: $description, file: $file }
      where: { id: { exact: $episodeId } }
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
