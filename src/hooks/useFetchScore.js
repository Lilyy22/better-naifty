import { useQuery } from "@apollo/client";
import {
  GETASSESSMENT,
  GETSTUDENTSCORE,
} from "../pages/dashboard/assessment/data/query";
import { useEffect, useState } from "react";

const useFetchScore = (course_id, user_id) => {
  const [loading, setLoading] = useState(true);
  const [assessment, setAssessment] = useState();
  const [tookAssessment, setTookAssessment] = useState();
  const [score, setScore] = useState();

  const { data: assessmentData, loading: assLoading } = useQuery(
    GETASSESSMENT,
    {
      variables: {
        courseId: course_id,
        limit: 5,
        offset: 0,
      },
      fetchPolicy: "network-only",
    }
  );

  const { data } = useQuery(GETSTUDENTSCORE, {
    variables: {
      courseId: course_id,
      userId: user_id,
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    setAssessment(assessmentData?.question?.length);
    setTookAssessment(data?.assessment_score?.took_assessment);
    setScore(data?.assessment_score?.score);
    setLoading(false);
  }, [assessmentData, data, assLoading]);

  console.log("loading " + loading);
  console.log("assess " + assessment + " " + assessmentData?.question?.[0]?.id);
  console.log("took Ass " + tookAssessment);
  console.log("score " + score);

  return { score, assessment, tookAssessment, loading };
};

export default useFetchScore;
