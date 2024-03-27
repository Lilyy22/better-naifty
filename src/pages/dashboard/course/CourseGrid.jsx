import React from "react";
import { CourseCategory } from "../courseCategory/CourseCategory";
import { useQuery } from "@apollo/client";
import { GETCOURSES } from "./data/query";
import { DashH4 } from "../../../components/Heading";
import CourseList from "./components/CourseList";

export const CourseGrid = () => {
  const { data, loading } = useQuery(GETCOURSES, {
    variables: {
      status: "APPROVED",
    },
  });

  return (
    <>
      <DashH4 text="Popular Topics" />
      <div className="h-48 max-w-7xl overflow-x-auto scrollbar-hide flex space-x-4">
        <CourseCategory />
      </div>
      <div className="border-t border-gray-200 py-8 my-8">
        <DashH4 text="Recent Courses" />
        <CourseList loading={loading} data={data} />
      </div>
    </>
  );
};
