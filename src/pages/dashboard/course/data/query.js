import { gql } from "@apollo/client";

export const GETINSTRUCTORCOURSE = gql`
  query GETINSTRUCTORCOURSE($userId: String) {
    course(where: { instructor_id: { exact: $userId } }) {
      id
      name
      updated_at
      is_approved
    }
  }
`;

export const GETCOURSE = gql`
  query GETCOURSE {
    course {
      id
      name
      description
      thumbnail
      updated_at
      instructor {
        studentprofile {
          first_name
          last_name
          profile_picture
        }
      }
    }
  }
`;

export const GETCOURSESECTION = gql`
  query GETCOURSESECTION($courseId: String) {
    course(where: { id: { exact: $courseId } }) {
      id
      name
      description
      updated_at
      sections {
        id
        title
        episodes {
          id
          title
        }
      }
    }
  }
`;
