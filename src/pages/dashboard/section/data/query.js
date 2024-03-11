import { gql } from "@apollo/client";

export const GETINSTRUCTORSECTION = gql`
  query GETINSTRUCTORSECTION {
    course_section {
      id
      title
      updated_at
      episodes {
        id
        title
      }
      course {
        name
      }
    }
  }
`;

export const GETSECTION = gql`
  query GETSECTION($sectionId: String) {
    course_section(where: { id: { exact: $sectionId } }) {
      id
      title
      description
      course {
        id
      }
      episodes {
        id
        file
        title
        description
        updated_at
      }
    }
  }
`;
