import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATESECTION } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Crud from "./component/Crud";
import { DashForm } from "../../../components/form/Form";

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
      <div className="relative p-4 w-full max-w-xl h-full xl:max-w-3xl">
        <DashForm title="Create Section">
          <button
            className="absolute top-4 right-4 group"
            onClick={handleOpen}
            disabled={loading ? true : false}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 fill-current group-hover:fill-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <Crud
            handleSubmit={handleSubmit}
            loading={loading}
            section={section}
            setSection={setSection}
          />
        </DashForm>
      </div>
    </>
  );
};
