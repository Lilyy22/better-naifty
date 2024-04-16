import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GETENROLLED } from "./data/query";
import { AuthContext } from "../../../context/AuthContext";
import { DashH4 } from "../../../components/Heading";
import { CourseCardLoader } from "../course/components/loader/CardLoader";
import { CourseCard } from "../course/components/Card";
import DataNotFound from "../../../components/DataNotFound";

const EnrolledCourses = () => {
  const { userId } = useContext(AuthContext);
  const array = [1, 2, 3, 4, 5, 6];

  const { data, loading, refetch } = useQuery(GETENROLLED, {
    variables: {
      studentId: userId,
    },
  });

  useEffect(() => {
    refetch();
  }, [data]);

  return (
    <div className="pb-8">
      <DashH4 text="Enrolled Courses" />
      <div className="flex flex-wrap gap-4">
        {loading && array.map((item) => <CourseCardLoader key={item} />)}
        {data?.course_enrollment?.length === 0 && (
          <DataNotFound text="You're not enrolled yet." />
        )}

        {data?.course_enrollment?.map(
          ({
            course: {
              id,
              name,
              description,
              thumbnail,
              instructor,
              updated_at,
              category,
            },
          }) => {
            return (
              <CourseCard
                enrolledCard={true}
                thumbnail={thumbnail}
                updated_at={updated_at}
                instructorName={`${instructor?.studentprofile?.first_name} ${instructor?.studentprofile?.last_name}`}
                instructorPhoto={instructor?.studentprofile?.profile_picture}
                title={name}
                description={description}
                category={category}
                enrolled={true}
                id={id}
                key={id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default EnrolledCourses;
