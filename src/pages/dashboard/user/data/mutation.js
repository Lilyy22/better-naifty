import { gql } from "@apollo/client";

export const APPROVECOURSE = gql`
  mutation APPROVECOURSE($courseId: String, $status: String) {
    update_course(
      input: { status: $status }
      where: { id: { exact: $courseId } }
    ) {
      affected_rows
    }
  }
`;
