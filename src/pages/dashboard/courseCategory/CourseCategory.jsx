import React from "react";
import { GETCOURSECATEGORY } from "./data/query";
import { useQuery } from "@apollo/client";
import { CardLoader } from "./components/Loader";
import { Card } from "./components/Card";

export const CourseCategory = () => {
  const { data, loading } = useQuery(GETCOURSECATEGORY);
  return loading ? (
    <CardLoader />
  ) : (
    data?.course_category?.map(({ id, image, name }) => {
      return <Card key={id} thumbnail={image} title={name} />;
    })
  );
};
