import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { useQuery } from "@apollo/client";
import { GETENROLLED } from "../../enroll/data/query";
import { DashH4, DashH5 } from "../../../../components/Heading";
import DataNotFound from "../../../../components/DataNotFound";
import { DashboardCourseProgressCard } from "../component/Card";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { DashCardLoader } from "../component/Loader";
import { Common } from "../component/Common";

const Student = () => {
  const { userId } = useContext(AuthContext);

  const {
    data: enrolledCourse,
    refetch: refechEnrolled,
    loading,
  } = useQuery(GETENROLLED, {
    variables: {
      studentId: userId,
    },
  });

  useEffect(() => {
    refechEnrolled();
  }, [enrolledCourse]);

  return (
    <div>
      <DashH4 text="Welcome Back ☺" />
      <hr />
      <div className="pt-4">
        <DashH5 text="My Courses" />
        <div className="flex space-x-4 justify-start h-auto overflow-x-auto scrollbar-hide pt-4">
          {loading && (
            <div className="flex space-x-4">
              <DashCardLoader />
              <DashCardLoader />
            </div>
          )}

          {enrolledCourse?.course_enrollment?.length === 0 && (
            <DataNotFound text="You're not enrolled yet." />
          )}

          {enrolledCourse?.course_enrollment?.map(({ id, course }) => {
            const totals = course?.sections?.reduce((acc, { episodes }) => {
              return acc + episodes?.length;
            }, 0);
            return (
              <DashboardCourseProgressCard
                key={id}
                totalVideos={totals}
                id={course?.id}
                bgColor="blue"
                course={course?.name}
                description={course?.description}
              />
            );
          })}
        </div>
        <hr className="py-2" />
        <DashH5 text="Course Analysis" />

        <div className="h-auto flex flex-wrap gap-4 mt-4">
          <div className="bg-gray-50 rounded-xl p-4 w-auto h-72">
            <Doughnut
              data={{
                labels: ["Course 1", "Course 2"],
                datasets: [
                  {
                    data: [1, 1], // Example data values
                    backgroundColor: ["#a259ff", "#CF9FFF"], // Example background colors
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Total hours spend",
                  },
                },
              }}
            />
          </div>
          <div className="bg-gray-50 rounded-xl p-4 w-auto h-72">
            <Pie
              data={{
                labels: ["Course 1", "Course 2"],
                datasets: [
                  {
                    data: [2, 1], // Example data values
                    backgroundColor: ["#b2d8d8", "#66b2b2"], // Example background colors
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Course Compeleted",
                  },
                },
              }}
            />
          </div>
          <Common />
        </div>
      </div>
    </div>
  );
};

export default Student;
