import React, { useContext, useEffect, useState } from "react";
import CourseRating from "./components/CourseRating";
import { useQuery } from "@apollo/client";
import { GETUSERRATING } from "./data/query";
import { AuthContext } from "../../../context/AuthContext";

const RateCourse = ({ enrolled, courseId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { userId } = useContext(AuthContext);

  const { data, refetch } = useQuery(GETUSERRATING, {
    variables: {
      userId: userId,
      courseId: courseId,
    },
  });

  useEffect(() => {
    refetch();
    setTimeout(() => {
      if (data?.rating?.length === 0 && enrolled) setIsOpen(true);
    }, 5000);
  }, [data, enrolled]);

  return (
    <div>
      <CourseRating isOpen={isOpen} handleModal={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default RateCourse;
