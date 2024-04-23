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
