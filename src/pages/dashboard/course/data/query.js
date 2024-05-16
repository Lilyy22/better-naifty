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
        created_at
        id
        status
        student {
          email
          id
          studentprofile {
            bio
            profile_picture
            first_name
            last_name
          }
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
  query GETUSERRATING($userId: String, $courseId: String) {
    rating(
      where: { user_id: { exact: $userId }, course_id: { exact: $courseId } }
    ) {
      id
    }
  }
`;

// export const GETENROLLEDSTUDENTS = gql`
//   query GETENROLLEDSTUDENTS($userId: String, $courseId: String) {
//     course(
//       where: {
//         instructor_id: { exact: $userId }
//         status: { exact: "APPROVED" }
//         id: { exact: $courseId }
//       }
//     ) {
//       enrollments {
//         id
//         student {
//           studentprofile {
//             first_name
//             last_name
//             profile_picture
//           }
//         }
//       }
//     }
//   }
// `;
