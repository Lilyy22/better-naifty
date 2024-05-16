import { gql } from "@apollo/client";

export const GETEPISODE = gql`
  query GETSECTIONEPISODE($episodeId: String) {
    curse_episode(where: { id: { exact: $episodeId } }) {
      id
      title
      description
      file
      section {
        course {
          id
          status
        }
      }
    }
  }
`;

export const GETEPISODECOUNT = gql`
  query GETEPISODECOUNT($sectionId: String) {
    curse_episode_aggregate(where: { section_id: { exact: $sectionId } }) {
      count
    }
  }
`;

export const GETEPISODEPROGRESS = gql`
  query GETEPISODEPROGRESS($episodeId: String, $userId: String) {
    course_progress(
      where: { user_id: { exact: $userId }, episode_id: { exact: $episodeId } }
    ) {
      id
      episode {
        id
      }
      course_started
      course_finished
    }
  }
`;

export const GETCOURSEEPISODEPROGRESS = gql`
  query GETCOURSEEPISODEPROGRESS($userId: String) {
    course_progress(where: { user_id: { exact: $userId } }) {
      id
      course_started
      course_finished
    }
  }
`;
