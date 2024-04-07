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

export const CREATEANSWER = gql`
  mutation CREATEANSWER($inputs: [AnswerInputType]) {
    create_answer(inputs: $inputs) {
      affected_rows
    }
  }
`;
// export const CREATEANSWER = gql`
//   mutation CREATEANSWER(
//     $questionId: String
//     $answer: String
//   ) {
//     create_answer(
//       inputs: [
//         { answer_text: $answer, question_id: $questionId, is_true: $isTrue }
//       ]
//     ) {
//       affected_rows
//     }
//   }
// `;
