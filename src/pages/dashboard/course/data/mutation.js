import { gql } from "@apollo/client";

export const CREATECOURSE = gql`
  mutation CREATECOURSE(
    $name: String
    $description: String
    $categoryId: String
    $publishDate: String
    $price: Float
    $thumbnail: String
    $instructorId: String
  ) {
    create_course(
      inputs: {
        name: $name
        description: $description
        category_id: $categoryId
        publish_date: $publishDate
        price: $price
        thumbnail: $thumbnail
        instructor_id: $instructorId
      }
    ) {
      data {
        name
      }
    }
  }
`;

export const UPDATECOURSE = gql`
  mutation UPDATECOURSE(
    $courseId: String
    $name: String
    $description: String
    $categoryId: String
    $publishDate: String
    $price: Float
    $thumbnail: String
  ) {
    update_course(
      input: {
        name: $name
        description: $description
        category_id: $categoryId
        publish_date: $publishDate
        price: $price
        thumbnail: $thumbnail
      }
      where: { id: { exact: $courseId } }
    ) {
      data {
        name
      }
    }
  }
`;

export const DELETECOURSE = gql`
  mutation DELETECOURSE($courseId: String) {
    delete_course(where: { id: { exact: $courseId } }) {
      affected_rows
    }
  }
`;

export const CREATECOURSERATING = gql`
  mutation CREATECOURSERATING(
    $courseId: String
    $userId: String
    $description: String
    $rating: Int
  ) {
    create_rating(
      inputs: {
        course_id: $courseId
        user_id: $userId
        description: $description
        rate: $rating
      }
    ) {
      affected_rows
    }
  }
`;
