import React from "react";
import { GETSTUDENTSCORE } from "./data/query";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const Score = () => {
  const { course_id } = useParams();
  const { data, loading } = useQuery(GETSTUDENTSCORE, {
    variables: {
      courseId: course_id,
    },
  });

  return <> hey {data?.assessment_score?.score}</>;
};

export default Score;
