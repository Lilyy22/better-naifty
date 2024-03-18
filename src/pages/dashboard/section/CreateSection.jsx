import React, { useContext, useEffect, useState } from "react";
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
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

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
      await createSection({
        variables: {
          courseId: section.courseId,
          title: section.title,
          description: section.description,
        },
      });
      setClose(false);
      setStatus({
        ...status,
        success: true,
      });
      setSection({
        ...section,
        courseId: "",
        title: "",
        description: "",
      });
      setTimeout(() => {
        navigate("/dashboard/section-list");
      }, 1000);
    } catch (error) {
      setClose(false); // set close false incase toast is closed
      setStatus({
        success: false,
        error: true,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };



  return (
    <>
      {status.success && (
        <Toast
          text="Section Successfully created!"
          isSuccess={true}
          close={close}
          setClose={setClose}
        />
      )}
      {status.error && (
        <Toast
          text={status.errorContent ?? "Something went wrong!"}
          isSuccess={false}
          close={close}
          setClose={setClose}
        />
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
