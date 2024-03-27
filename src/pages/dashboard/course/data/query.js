import { gql } from "@apollo/client";

export const GETINSTRUCTORCOURSE = gql`
  query GETINSTRUCTORCOURSE($userId: String) {
    course(where: { instructor_id: { exact: $userId } }) {
      id
      name
      price
      status
      updated_at
      enrollments {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GETCOURSES = gql`
  query GETCOURSES($status: String) {
    course(where: { status: { exact: $status } }) {
      id
      name
      description
      thumbnail
      updated_at
      enrollments {
        status
        student {
          id
        }
      }
      category {
        name
      }
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

export const GETCOURSE = gql`
  query GETCOURSE($courseId: String) {
    course(where: { id: { exact: $courseId } }) {
      id
      name
      description
      thumbnail
      updated_at
      price
      publish_date
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
      price
      enrollments {
        status
        student {
          id
        }
      }
      category {
        name
      }
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

export const GETUSERRATING = gql`
  query GETUSERRATING($userId: String) {
    rating(where: { user_id: { exact: $userId } }) {
      id
    }
  }
`;
