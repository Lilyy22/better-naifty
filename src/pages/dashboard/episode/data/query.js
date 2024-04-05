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
