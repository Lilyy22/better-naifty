import { gql } from "@apollo/client";

export const GETASSESSMENT = gql`
  query GETASSESSMENT($courseId: ID!) {
    assessment(where: { course_id: $courseId }) {
      questions {
        id
        question_text
        answers {
          id
          answer_text
          is_true
        }
      }
    }
  }
`;
