import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATESECTION } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Crud from "./component/Crud";
import { GETSECTION } from "./data/query";

export const UpdateSection = ({ sectionId, handleOpen, modalUpdate }) => {
  const [updateSection, { loading }] = useMutation(UPDATESECTION);
  const {
    data,
    loading: sectionLoading,
    refetch,
  } = useQuery(GETSECTION, {
    variables: {
      sectionId: sectionId,
    },
  });

  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [section, setSection] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSection({
        variables: {
          sectionId: sectionId,
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
        title: "",
        description: "",
      });
      setTimeout(() => {
        handleOpen();
        modalUpdate();
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
    if (!sectionId) {
      // navigate("/courses-description");
    } else {
      refetch();
      if (data?.course_section[0]) {
        setSection({
          title: data.course_section[0].title,
          description: data.course_section[0].description,
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

      <Crud
        handleSubmit={handleSubmit}
        loading={loading}
        section={section}
        setSection={setSection}
        sectionLoading={sectionLoading}
        handleOpen={handleOpen}
      />
    </>
  );
};
