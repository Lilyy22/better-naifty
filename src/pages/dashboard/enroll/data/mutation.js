import { gql } from "@apollo/client";

export const CREATEENROLLMENT = gql`
  mutation CREATEENROLLMENT($courseId: String, $studentId: String) {
    create_courseenrollment(
      inputs: { course_id: $courseId, student_id: $studentId }
    ) {
      data {
        payment_link
      }
      affected_rows
    }
  }
`;
