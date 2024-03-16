import { gql } from "@apollo/client";

export const GETINSTRUCTORSECTION = gql`
  query GETINSTRUCTORSECTION($userId: String) {
    course_section(where: { instructor_id: { exact: $userId } }) {
      id
      title
      updated_at
      episodes {
        id
        title
      }
      course {
        name
      }
    }
  }
`;

export const GETSECTION = gql`
  query GETSECTION($sectionId: String) {
    course_section(where: { id: { exact: $sectionId } }) {
      id
      title
      description
      course {
        id
      }
      episodes {
        id
        file
        title
        description
        updated_at
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
