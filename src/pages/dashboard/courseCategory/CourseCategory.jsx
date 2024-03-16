import React from "react";
import { GETCOURSECATEGORY } from "./data/query";
import { useQuery } from "@apollo/client";
import { CardLoader } from "./components/Loader";
import { Card } from "./components/Card";

export const CourseCategory = () => {
  const { data, loading } = useQuery(GETCOURSECATEGORY);
  const array = [1, 2, 3, 4, 5, 6];

  return loading
    ? array.map((item) => <CardLoader key={item} />)
    : data?.course_category?.map(({ id, image, name }) => {
        return <Card key={id} thumbnail={image} title={name} categoryId={id} />;
      });
};
