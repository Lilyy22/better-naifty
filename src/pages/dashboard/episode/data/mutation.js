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
  mutation (
    $episode_id: String
    $user_id: String
    $course_started: Boolean
    $course_finished: Boolean
  ) {
    create_courseprogress(
      inputs: {
        episode_id: $episode_id
        user_id: $user_id
        course_started: $course_started
        course_finished: $course_finished
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATEEPISODEPROGRESS = gql`
  mutation ($episode_id: String, $course_finished: Boolean) {
    update_courseprogress(
      input: { course_finished: $course_finished }
      where: { episode_id: { exact: $episode_id } }
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
