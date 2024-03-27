import { gql } from "@apollo/client";

export const GETENROLLED = gql`
  query GETENROLLED($studentId: String) {
    course_enrollment(
      where: {
        student_id: { exact: $studentId }
        status: { exact: "APPROVED" }
      }
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
