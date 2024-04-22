import { gql } from "@apollo/client";

export const CREATEQUESTION = gql`
  mutation CREATEQUESTION($courseId: String, $question: String) {
    create_question(
      inputs: { course_id: $courseId, question_text: $question }
    ) {
      data {
        id
      }
    }
  }
`;
export const DELETEQUESTION = gql`
  mutation DELETEQUESTION($id: String) {
    delete_question(where: { id: { exact: $id } }) {
      affected_rows
    }
  }
`;

export const CREATEANSWER = gql`
  mutation CREATEANSWER($inputs: [AnswerInputType]) {
    create_answer(inputs: $inputs) {
      affected_rows
    }
  }
`;

export const UPDATEANSWER = gql`
  mutation UPDATEANSWER($inputs: [AnswerInputType], $quesionId: String) {
    update_answer(
      where: { question_id: { exact: $quesionId } }
      input: $inputs
    ) {
      affected_rows
    }
  }
`;

export const UPDATEQUESTION = gql`
  mutation UPDATEQUESTION($questionId: String, $question: String) {
    update_question(
      input: { question_text: $question }
      where: { id: { exact: $questionId } }
    ) {
      affected_rows
    }
  }
`;

export const DELETEANSWER = gql`
  mutation DELETEANSWER($questionId: String) {
    delete_answer(where: { question_id: { exact: $questionId } }) {
      affected_rows
    }
  }
`;

export const CREATESTUDENTASSESSMENT = gql`
  mutation CREATESTUDENTASSESSMENT($studentAssessment: [AssessmentInputType]) {
    create_assessment(inputs: $studentAssessment) {
      affected_rows
    }
  }
`;
