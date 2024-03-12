import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation, useQuery } from "@apollo/client";
import { GETINSTRUCTORCOURSE } from "../course/data/query";
import { CREATESECTION } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Crud from "./component/Crud";
import { useNavigate } from "react-router-dom";

export const CreateSection = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  const [createSection, { loading }] = useMutation(CREATESECTION);
  const { data: courseData, loading: courseLoading } = useQuery(
    GETINSTRUCTORCOURSE,
    {
      variables: { userId: userId },
    }
  );

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
      const { error } = await createSection({
        variables: {
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
        setTimeout(() => {
          navigate("/dashboard/section-list");
        }, 1000);
      }
    } catch (error) {}
  };

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
