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

export const DELETEUSER = gql`
  mutation DELETEUSER($userId: String!) {
    delete_users(where: { id: { exact: $userId } }) {
      affected_rows
    }
  }
`;
