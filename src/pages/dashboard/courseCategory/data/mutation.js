import { gql } from "@apollo/client";

export const CREATECATEGORY = gql`
  mutation CREATECATEGORY(
    $name: String
    $description: String
    $thumbnail: String
  ) {
    create_coursecategory(
      inputs: { name: $name, description: $description, image: $thumbnail }
    ) {
      affected_rows
    }
  }
`;

export const UPDATECATEGORY = gql`
  mutation UPDATECATEGORY(
    $name: String
    $description: String
    $thumbnail: String
    $categoryId: String
  ) {
    update_coursecategory(
      input: { name: $name, description: $description, image: $thumbnail }
      where: { id: { exact: $categoryId } }
    ) {
      affected_rows
    }
  }
`;

export const DELETECATEGORY = gql`
  mutation DELETECATEGORY($categoryId: String) {
    delete_coursecategory(where: { id: { exact: $categoryId } }) {
      affected_rows
    }
  }
`;
