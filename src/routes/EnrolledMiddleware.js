import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useEnrolledCourse } from "../hooks/useEnrolledCourse";
import { DetailLoader } from "../pages/dashboard/episode/component/Loader";

const EnrolledMiddleware = () => {
  const { course_id } = useParams();
  const { isEpisodeEnrolled, loading } = useEnrolledCourse(course_id);
  const [enrollmentChanged, setEnrollmentChanged] = useState(false);

  useEffect(() => {
    if (loading === false) {
      setEnrollmentChanged(true);
    }
  }, [loading]);

  if (loading) {
    return <DetailLoader />;
  } else if (enrollmentChanged) {
    if (isEpisodeEnrolled) {
      return <Outlet />;
    } else {
      return <Navigate to="/dashboard/enrolled-courses" />;
    }
  } else {
    return null;
  }
};

export default EnrolledMiddleware;

//   useEffect(() => {
//     if (loading || !isEpisodeEnrolled) {
//       return <DetailLoader />;
//     } else {
//       console.log(isEpisodeEnrolled);
//       return isEpisodeEnrolled ? (
//         <Outlet />
//       ) : (
//         <Navigate to="/dashboard/enrolled-courses" />
//       );
//     }
//   }, [isEpisodeEnrolled]);

//    return isEpisodeEnrolled ? (
//      <Outlet />
//    ) : (
//      <Navigate to="/dashboard/enrolled-courses" />
//    );
// };

// export default EnrolledMiddleware;
