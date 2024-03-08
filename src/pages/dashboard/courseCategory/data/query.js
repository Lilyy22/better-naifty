import { gql } from "@apollo/client";

export const GETCOURSECATEGORY = gql`
  query GETCOURSECATEGORY {
    course_category {
      id
      name
      image
    }
  }
`;
