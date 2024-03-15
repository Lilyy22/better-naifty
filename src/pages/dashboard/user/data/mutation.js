import { gql } from "@apollo/client";

export const APPROVECOURSE = gql`
  mutation APPROVECOURSE($courseId: String, $status: Boolean) {
    update_course(
      input: { is_approved: $status }
      where: { id: { exact: $courseId } }
    ) {
      affected_rows
    }
  }
`;
