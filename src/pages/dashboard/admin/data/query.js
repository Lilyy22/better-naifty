import { gql } from "@apollo/client";

export const GETSTUDENTUSERS = gql`
  query GETSTUDENTUSERS($limit: Int!, $offset: Int!) {
    users(
      where: {
        is_instructor: { exact: "False" }
        is_superuser: { exact: "False" }
      }
      limit: $limit
      offset: $offset
    ) {
      id
      email
      is_active
      is_instructor
      is_superuser
      studentprofile {
        first_name
        last_name
        bio
        profile_picture
      }
    }
  }
`;

export const GETSTUDENTUSERSCOUNT = gql`
  query GETSTUDENTUSERSCOUNT {
    users_aggregate(
      where: {
        is_instructor: { exact: "False" }
        is_superuser: { exact: "False" }
      }
    ) {
      count
    }
  }
`;

export const GETINSTRUCTORUSERS = gql`
  query GETINSTRUCTORUSERS($limit: Int!, $offset: Int!) {
    users(
      where: { is_instructor: { exact: "True" } }
      limit: $limit
      offset: $offset
    ) {
      id
      email
      is_active
      is_instructor
      is_superuser
      studentprofile {
        first_name
        last_name
        bio
        profile_picture
      }
    }
  }
`;

export const GETINSTRUCTORUSERSCOUNT = gql`
  query GETINSTRUCTORUSERSCOUNT {
    users_aggregate(where: { is_instructor: { exact: "True" } }) {
      count
    }
  }
`;

export const GETADMINUSERS = gql`
  query GETADMINUSERS {
    users(where: { is_superuser: { exact: "True" } }) {
      id
      email
      is_active
      is_instructor
      is_superuser
      studentprofile {
        first_name
        last_name
        bio
        profile_picture
      }
    }
  }
`;

export const GETADMINUSERSCOUNT = gql`
  query GETADMINUSERSCOUNT {
    users_aggregate(where: { is_superuser: { exact: "True" } }) {
      count
    }
  }
`;

export const GETCOURSECOUNT = gql`
  query GETCOURSECOUNT($status: String) {
    course_aggregate(where: { status: { exact: $status } }) {
      count
    }
  }
`;

export const GETCOURSE = gql`
  query GETCOURSE($offset: Int, $limit: Int, $status: String) {
    course(
      offset: $offset
      limit: $limit
      where: { status: { exact: $status } }
    ) {
      id
      name
      status
      is_approved
      instructor {
        email
        studentprofile {
          first_name
          last_name
        }
      }
      enrollments {
        aggregate {
          count
        }
      }
      category {
        name
      }
      publish_date
    }
  }
`;
