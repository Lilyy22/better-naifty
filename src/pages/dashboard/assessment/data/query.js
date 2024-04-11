import { gql } from "@apollo/client";

export const GETASSESSMENT = gql`
  query GETASSESSMENT($courseId: String!) {
    question(where: { course_id: { exact: $courseId } }) {
      id
      question_text
      answers {
        id
        answer_text
        is_true
      }
    }
  }
`;

export const GETQUESTION = gql`
  query GETQUESTION($questionId: String!) {
    question(where: { id: { exact: $questionId } }) {
      id
      question_text
      answers {
        id
        answer_text
        is_true
      }
    }
  }
`;
