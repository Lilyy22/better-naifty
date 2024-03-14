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

export const GETCOURSEBYCATEGORY = gql`
  query GETCOURSES($categoryId: String) {
    course(where: { category_id: { exact: $categoryId } }) {
      id
      name
      description
      thumbnail
      updated_at
      enrollments {
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
