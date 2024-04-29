import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useEnrolledCourse } from "../hooks/useEnrolledCourse";
import { DetailLoader } from "../pages/dashboard/episode/component/Loader";

const EnrolledMiddleware = () => {
  const { course_id } = useParams();
  const { isCourseEnrolled, loading } = useEnrolledCourse(course_id);
  const [enrollmentChanged, setEnrollmentChanged] = useState(true);

  useEffect(() => {
    if (!loading) {
      setEnrollmentChanged(false);
    }
  }, [loading]);

  if (!enrollmentChanged) {
    return isCourseEnrolled ? (
      <Outlet />
    ) : (
      <Navigate to="/dashboard/enrolled-courses" />
    );
  } else {
    return <DetailLoader />;
  }
};

export default EnrolledMiddleware;
