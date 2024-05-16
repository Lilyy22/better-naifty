import React from "react";
import { useQuery } from "@apollo/client";
import { LATESTCOURSES } from "../../enroll/data/query";
import { DashboardProgressCard } from "./Card";

export const Common = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Adding 1 since months are zero-based
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month}-${day}`;

  const { data, refetch, loading } = useQuery(LATESTCOURSES, {
    variables: {
      currentDate: formattedDate,
      limit: 5,
    },
  });

  return (
    <div className="bg-gray-50 w-full rounded-xl flex-1 lg:w-1/2">
      {loading ? "•••" : <DashboardProgressCard courses={data?.course} />}
    </div>
  );
};
