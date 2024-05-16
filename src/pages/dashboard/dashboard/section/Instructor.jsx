import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { COURSECOUNT, INSTTOTALSALES } from "../data/query";
import { AuthContext } from "../../../../context/AuthContext";
import { DashboardCard, DashboardProgressCard } from "../component/Card";
import { DashH4, DashH5 } from "../../../../components/Heading";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Common } from "../component/Common";

const Instructor = () => {
  const { userId } = useContext(AuthContext);

  const { data: courseData, refetch: refetchCourse } = useQuery(COURSECOUNT, {
    variables: {
      userId: userId,
      status: undefined,
    },
  });

  const { data: appcourseData, refetch: refetchAppCourse } = useQuery(
    COURSECOUNT,
    {
      variables: {
        userId: userId,
        status: "APPROVED",
      },
    }
  );

  const { data: salesData, refetch: refetchSales } = useQuery(INSTTOTALSALES, {
    variables: {
      userId: userId,
    },
  });

  const totalSales = salesData?.course?.reduce((acc, { enrollments }) => {
    return (
      acc +
      enrollments?.reduce(
        (innerAcc, { course }) => innerAcc + parseFloat(course?.price),
        0
      )
    );
  }, 0);

  const totalEnrollment = salesData?.course?.reduce((acc, { enrollments }) => {
    return acc + enrollments?.length;
  }, 0);

  useEffect(() => {
    refetchCourse();
    refetchAppCourse();
    refetchSales();
  }, [appcourseData, courseData, salesData]);

  return (
    <div>
      <DashH4 text="Welcome Back ☺" />
      <hr />
      <div className="pt-4">
        <div className="flex space-x-4 justify-start h-auto overflow-x-auto scrollbar-hide pt-4">
          {/* {loading && loader.map((item) => <DashCardLoader key={item} />)} */}
          <DashboardCard
            total={totalEnrollment}
            label="Total Enrolled Students"
            iconBg="purple"
            icon={
              <svg
                className="w-4 h-4 fill-purple-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
              </svg>
            }
          />
          <DashboardCard
            total={appcourseData?.course_aggregate?.count}
            label="Total Approved Courses"
            iconBg="green"
            icon={
              <svg
                className="w-4 h-4 fill-green-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z" />
              </svg>
            }
          />
          <DashboardCard
            total={courseData?.course_aggregate?.count}
            label="Total Courses"
            iconBg="blue"
            icon={
              <svg
                className="w-4 h-4 fill-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z" />
              </svg>
            }
          />
          <DashboardCard
            total={`$${totalSales}`}
            label="Total Sales"
            iconBg="red"
            icon={
              <svg
                className="w-4 h-4 fill-red-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
              </svg>
            }
          />
        </div>
        <hr className="py-2" />
        <DashH5 text="Course Analysis" />

        <div className="h-auto flex flex-wrap gap-4 mt-4">
          <div className="bg-white w-full p-2 rounded-xl lg:w-[47%]">
            <Line
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                ],
                datasets: [
                  {
                    data: [0, 0, 0, 0, 0, 0, 0, 0], // Example data values
                    backgroundColor: ["#CF9FFF"], // Example background colors
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Students' gained each month",
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

export default Instructor;
