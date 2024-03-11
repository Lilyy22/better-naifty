import { gql } from "@apollo/client";

export const GETINSTRUCTORCOURSE = gql`
  query GETINSTRUCTORCOURSE($userId: String) {
    course(where: { instructor_id: { exact: $userId } }) {
      id
      name
      price
      status
      updated_at
    }
  }
`;

export const GETCOURSES = gql`
  query GETCOURSES {
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
      thumbnail
      updated_at
      instructor {
        studentprofile {
          first_name
          last_name
          profile_picture
          bio
          user {
            email
          }
        }
      }
      sections {
        id
        title
        episodes {
          id
          title
          file
        }
      }
    }
  }
`;
