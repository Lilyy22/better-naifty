import React, { useContext, useState } from "react";
import CRUD from "./component/CRUD";
import { useMutation } from "@apollo/client";
import { CREATEDISCUSSION } from "./data/mutation";
import { AuthContext } from "../../../context/AuthContext";
import { Toast } from "../../../components/Toast";
import { GETDISCUSSIONBYCOURSE } from "./data/query";

export const CreateForum = ({ handleOpen, courseId }) => {
  const [createForum] = useMutation(CREATEDISCUSSION);
  const { userId } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [forum, setForum] = useState({
    topic: "",
    body: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createForum({
        variables: {
          courseId: courseId,
          userId: userId,
          title: forum.topic,
          description: forum.body,
        },
        refetchQueries: [GETDISCUSSIONBYCOURSE, "GET_DISCUSSION_BY_COURSE"],
      });

      setLoading(false);
      setClose(false);
      setStatus({
        ...status,
        success: true,
      });
      setTimeout(() => {
        handleOpen();
      }, 1000);
    } catch (error) {
      setLoading(false);
      setClose(false); // set close false incase toast is closed
      setStatus({
        success: false,
        error: true,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };

  return (
    <div>
      {status.success && (
        <Toast
          text="Discussion Successfully created!"
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
      <CRUD
        forum={forum}
        setForum={setForum}
        handleOpen={handleOpen}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};
