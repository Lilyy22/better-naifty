import { gql } from "@apollo/client";

export const GETENROLLEDSTUDENTS = gql`
  query GETENROLLEDSTUDENTS($courseId: String) {
    course_enrollment(where: { course_id: { exact: $courseId } }) {
      id
      student {
        email
        studentprofile {
          first_name
          last_name
          profile_picture
        }
      }
    }
  }
`;

export const GETENROLLEDEPISODE = gql`
  query GETENROLLEDEPISODE($episodeId: String) {
    curse_episode(where: { id: { exact: $episodeId } }) {
      section {
        course {
          enrollments {
            student {
              id
            }
          }
        }
      }
    }
  }
`;

export const GETENROLLEDCOURSE = gql`
  query GETENROLLEDCOURSE($userId: String) {
    course_enrollment(where: { student_id: { exact: $userId } }) {
      course {
        id
      }
    }
  }
`;

export const LATESTCOURSES = gql`
  query LATESTCOURSES($currentDate: String!, $limit: Int!) {
    course(where: { created_at: { lte: $currentDate } }, limit: $limit) {
      id
      name
      created_at
    }
  }
`;

export const GETENROLLED = gql`
  query GETENROLLED($studentId: String) {
    course_enrollment(
      where: { student_id: { exact: $studentId }, status: { exact: "SUCCESS" } }
    ) {
      id
      course {
        id
        name
        description
        thumbnail
        updated_at
        category {
          name
        }
        sections {
          episodes {
            id
          }
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
  }
`;
