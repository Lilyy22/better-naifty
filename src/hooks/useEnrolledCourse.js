import { useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { GETENROLLEDCOURSE } from "../pages/dashboard/enroll/data/query";
import { AuthContext } from "../context/AuthContext";

export const useEnrolledCourse = (courseId, episodeId, sectionId) => {
  const [enrolled_course, setEnrolledCourse] = useState([]);
  const [enrolled_sections, setEnrolledSections] = useState([]);
  const [enrolled_episodes, setEnrolledEpisodes] = useState([]);
  const [isCourseEnrolled, setIsCourseEnrolled] = useState(false);
  const [isSectionEnrolled, setIsSectionEnrolled] = useState(false);
  const [isEpisodeEnrolled, setIsEpisodeEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  const { userId } = useContext(AuthContext);
  const { data, loading: queryLoading } = useQuery(GETENROLLEDCOURSE, {
    variables: {
      userId: userId,
    },
  });

  const handleEnrollment = async () => {
    const enrolledCourse = data?.course_enrollment?.map(
      ({ course }) => course.id
    );
    const enrolledSections = data?.course_enrollment?.map(({ course }) =>
      course?.sections?.map(({ id }) => id)
    );
    const enrolledEpisodes = data?.course_enrollment?.flatMap(({ course }) =>
      course?.sections?.flatMap(({ episodes }) => episodes?.map(({ id }) => id))
    );

    const courseEnrolled = enrolledCourse?.some((id) => id === courseId);
    const sectionEnrolled = enrolledSections?.some((id) => id === sectionId);
    const episodeEnrolled = enrolledEpisodes?.some((id) => id === episodeId);

    setEnrolledCourse(enrolledCourse);
    setEnrolledSections(enrolledSections);
    setEnrolledEpisodes(enrolledEpisodes);
    setIsCourseEnrolled(courseEnrolled);
    setIsSectionEnrolled(sectionEnrolled);
    setIsEpisodeEnrolled(episodeEnrolled);
  };

  useEffect(() => {
    setLoading(queryLoading);

    if (queryLoading === false && data) {
      handleEnrollment();
    }
  }, [queryLoading, data]);

  return {
    enrolled_course,
    enrolled_sections,
    enrolled_episodes,
    isCourseEnrolled,
    isEpisodeEnrolled,
    isSectionEnrolled,
    loading,
  };
};
