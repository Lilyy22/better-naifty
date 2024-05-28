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

export const UPDATEUSERSTATUS = gql`
  mutation UPDATEUSERSTATUS($userId: String!, $status: Boolean!) {
    update_users(
      where: { id: { exact: $userId } }
      input: { is_active: $status }
    ) {
      affected_rows
    }
  }
`;

export const UPDATEUSERROLE = gql`
  mutation UPDATEUSERROLE($userId: String!, $role: Boolean!, $admin: Boolean!) {
    update_users(
      where: { id: { exact: $userId } }
      input: { is_instructor: $role, is_superuser: $admin }
    ) {
      affected_rows
    }
  }
`;

export const UPDATEUSERTOADMIN = gql`
  mutation UPDATEUSERTOADMIN($userId: String!, $admin: Boolean!) {
    update_users(
      where: { id: { exact: $userId } }
      input: { is_instructor: false, is_superuser: $admin }
    ) {
      affected_rows
    }
  }
`;
