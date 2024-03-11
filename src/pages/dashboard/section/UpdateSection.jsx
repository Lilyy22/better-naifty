import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation, useQuery } from "@apollo/client";
import { GETINSTRUCTORCOURSE } from "../course/data/query";
import { CREATESECTION, UPDATESECTION } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Crud from "./component/Crud";
import { useNavigate, useParams } from "react-router-dom";
import { GETSECTION } from "./data/query";

export const UpdateSection = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const { section_id } = useParams();

  const [updateSection, { loading }] = useMutation(UPDATESECTION);
  const { data: courseData, loading: courseLoading } = useQuery(
    GETINSTRUCTORCOURSE,
    {
      variables: { userId: userId },
    }
  );
  const { data } = useQuery(GETSECTION, {
    variables: {
      sectionId: section_id,
    },
  });

  const [success, setSuccess] = useState(false);
  const [section, setSection] = useState({
    courseId: "",
    title: "",
    description: "",
  });

  const handleCourse = (e) => {
    setSection({ ...section, courseId: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await updateSection({
        variables: {
          sectionId: section_id,
          courseId: section.courseId,
          title: section.title,
          description: section.description,
        },
      });
      if (!error) {
        setSuccess(true);
        setSection({
          ...section,
          courseId: "",
          title: "",
          description: "",
        });
        navigate("/dashboard/section-list");
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!section_id) {
      navigate("/dashboard/section-list");
    } else {
      if (data?.course_section[0]) {
        setSection({
          title: data.course_section[0].title,
          description: data.course_section[0].description,
          courseId: data.course_section[0].course?.id,
        });
      }
    }
  }, [data?.course_section[0]]);

  return (
    <>
      {success && (
        <Toast text="Section Successfully created!" isSuccess={true} />
      )}
      <Crud
        handleSubmit={handleSubmit}
        loading={loading}
        section={section}
        setSection={setSection}
        courseData={courseData}
        courseLoading={courseLoading}
        handleCourse={handleCourse}
      />
    </>
  );
};
