import React from "react";
import Student from "./section/Student";
import Instructor from "./section/Instructor";
import Admin from "./section/Admin";
import { useRole } from "../../../hooks/useRole";
import { useQuery } from "@apollo/client";
import { LATESTCOURSES } from "../enroll/data/query";
import { DashboardProgressCard } from "./component/Card";

const Dashboard = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Adding 1 since months are zero-based
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month}-${day}`;

  const { isAInstructor, isAStudent, isAdmin } = useRole();
  const { data, refetch, loading } = useQuery(LATESTCOURSES, {
    variables: {
      currentDate: formattedDate,
      limit: 5,
    },
  });

  return (
    <>
      {isAStudent && <Student />}
      {isAInstructor && <Instructor />}
      {isAdmin && <Admin />}
      <div className="bg-gray-50 w-full rounded-xl p-4 mt-4 flex-1 lg:w-1/2">
        {loading ? "•••" : <DashboardProgressCard courses={data?.course} />}
      </div>
    </>
  );
};

export default Dashboard;
