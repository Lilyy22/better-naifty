import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATESECTION } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Crud from "./component/Crud";

export const CreateSection = ({ courseId, handleOpen, modalUpdate }) => {
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [createSection, { loading }] = useMutation(CREATESECTION);
  const [section, setSection] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSection({
        variables: {
          courseId: courseId,
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
        handleOpen={handleOpen}
      />
    </>
  );
};
