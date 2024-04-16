import { gql } from "@apollo/client";

export const GETDISCUSSIONBYCOURSE = gql`
  query GETDISCUSSIONBYCOURSE($courseId: String) {
    discussion_topic(where: { course_id: { exact: $courseId } }) {
      id
      title
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

export const GETDISCUSSION = gql`
  query GETDISCUSSION($Id: String) {
    discussion_topic(where: { id: { exact: $Id } }) {
      id
      title
      description
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

export const GETUSERDISCUSSION = gql`
  query GETUSERDISCUSSION($topicId: String) {
    discussion_topic(where: { id: { exact: $topicId } }) {
      id
      user {
        id
      }
    }
  }
`;
