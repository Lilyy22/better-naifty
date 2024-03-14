import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation, useQuery } from "@apollo/client";
import { GETINSTRUCTORCOURSE } from "../course/data/query";
import { CREATESECTION, UPDATESECTION } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Crud from "./component/Crud";
import { useNavigate, useParams } from "react-router-dom";
import { GETSECTION } from "./data/query";
import { GoBack } from "../../../components/Button";

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
  const {
    data,
    loading: sectionLoading,
    refetch,
  } = useQuery(GETSECTION, {
    variables: {
      sectionId: section_id,
    },
  });

  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

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
      await updateSection({
        variables: {
          sectionId: section_id,
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

  useEffect(() => {
    if (!section_id) {
      navigate("/dashboard/section-list");
    } else {
      refetch();
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
      {status.success && (
        <Toast
          text="Section Successfully updated"
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
      <GoBack text="Back" pathname="/dashboard/section-list" />
      <Crud
        handleSubmit={handleSubmit}
        loading={loading}
        section={section}
        setSection={setSection}
        courseData={courseData}
        courseLoading={courseLoading}
        handleCourse={handleCourse}
        sectionLoading={sectionLoading}
      />
    </>
  );
};
