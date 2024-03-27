import { gql } from "@apollo/client";

export const GETCOURSECATEGORY = gql`
  query GETCOURSECATEGORY {
    course_category {
      id
      name
      description
      image
    }
  }
`;

export const GETCATEGORY = gql`
  query GETCATEGORY($categoryId: String) {
    course_category(where: { id: { exact: $categoryId } }) {
      id
      name
      description
      image
    }
  }
`;

export const GETCOURSEBYCATEGORY = gql`
  query GETCOURSEBYCATEGORY($categoryId: String, $status: String) {
    course(
      where: { category_id: { exact: $categoryId }, status: { exact: $status } }
    ) {
      id
      name
      description
      thumbnail
      updated_at
      enrollments {
        status
        student {
          id
        }
      }
      category {
        name
      }
      instructor {
        studentprofile {
          first_name
          last_name
          profile_picture
        }
      }
    }
  }
`;
