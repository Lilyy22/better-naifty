import React from "react";
import { CourseCategory } from "../courseCategory/CourseCategory";
import { useQuery } from "@apollo/client";
import { GETCOURSE } from "./data/query";
import { CourseCardLoader } from "./components/loader/CardLoader";
import { CourseCard } from "../course/components/Card";
import { DashH4 } from "../../../components/Heading";

export const CourseGrid = () => {
  const { data, loading } = useQuery(GETCOURSE);

  return (
    <>
      <DashH4 text="Popular Topics" />
      <div className="h-44 max-w-7xl overflow-x-auto flex space-x-4">
        <CourseCategory />
      </div>
      <div className="border-t border-gray-200 py-8 my-8">
        <DashH4 text="Recent Courses" />
        <div className="flex flex-wrap gap-4">
          {loading && (
            <>
              <CourseCardLoader /> <CourseCardLoader /> <CourseCardLoader />
              <CourseCardLoader />
            </>
          )}
          {data?.course.map(
            ({ id, name, description, thumbnail, instructor, updated_at }) => {
              const { first_name, last_name } = instructor?.studentprofile;
              const fullName = `${first_name} ${last_name}`;
              return (
                <CourseCard
                  thumbnail={thumbnail}
                  updated_at={updated_at}
                  instructorName={fullName}
                  instructorPhoto={instructor?.studentprofile?.profile_picture}
                  title={name}
                  description={description}
                  id={id}
                  key={id}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
