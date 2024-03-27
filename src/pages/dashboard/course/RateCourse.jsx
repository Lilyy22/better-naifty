import React, { useContext, useEffect, useState } from "react";
import CourseRating from "./components/CourseRating";
import { useQuery } from "@apollo/client";
import { GETUSERRATING } from "./data/query";
import { AuthContext } from "../../../context/AuthContext";

const RateCourse = ({ enrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { userId } = useContext(AuthContext);

  const { data } = useQuery(GETUSERRATING, {
    variables: {
      userId: userId,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      if (data?.rating.length === 0 && enrolled) setIsOpen(!isOpen);
    }, 5000);
  }, [data, enrolled]);

  return (
    <div>
      <CourseRating isOpen={isOpen} handleModal={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default RateCourse;
