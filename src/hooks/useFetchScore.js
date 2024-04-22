import { useQuery } from "@apollo/client";
import { GETSTUDENTSCORE } from "../pages/dashboard/assessment/data/query";

const useFetchScore = (course_id) => {
  const { data, loading } = useQuery(GETSTUDENTSCORE, {
    variables: {
      courseId: course_id,
    },
  });
  return { data, loading };
};
export default useFetchScore;
