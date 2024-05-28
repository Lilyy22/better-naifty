import { gql } from "@apollo/client";

export const GETASSESSMENT = gql`
  query GETASSESSMENT($courseId: String!, $limit: Int, $offset: Int) {
    question(
      where: { course_id: { exact: $courseId } }
      limit: $limit
      offset: $offset
    ) {
      id
      question_text
      course {
        name
      }
      answers {
        id
        answer_text
        is_true
      }
      aggregate {
        count
      }
    }
  }
`;

export const GETASSESSMENTNOPAGINATION = gql`
  query GETASSESSMENT($courseId: String!) {
    question(where: { course_id: { exact: $courseId } }) {
      id
      question_text
      course {
        name
      }
      answers {
        id
        answer_text
        is_true
      }
      aggregate {
        count
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

export const GETSTUDENTSCORE = gql`
  query GETSTUDENTSCORE($courseId: ID!, $userId: ID!) {
    assessment_score(where: { course_id: $courseId, user_id: $userId }) {
      score
      took_assessment
    }
  }
`;
