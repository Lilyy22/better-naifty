import React from "react";
import CourseList from "../course/components/CourseList";
import { DashH4 } from "../../../components/Heading";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GETCOURSEBYCATEGORY } from "./data/query";
import { CourseCategory } from "./CourseCategory";

const CourseCategoryList = () => {
  const { category_id } = useParams();
  const { data, loading } = useQuery(GETCOURSEBYCATEGORY, {
    variables: {
      categoryId: category_id,
      status: "APPROVED",
    },
  });

  return (
    <>
      <div className="h-48 max-w-7xl overflow-x-auto scrollbar-hide flex space-x-4">
        <CourseCategory />
      </div>
      <div className="py-8">
        <DashH4 text={`${data?.course[0]?.category?.name ?? ""} Courses`} />
        <hr className="text-gray-900 h-4" />
        <CourseList loading={loading} data={data} />
      </div>
    </>
  );
};

export default CourseCategoryList;
