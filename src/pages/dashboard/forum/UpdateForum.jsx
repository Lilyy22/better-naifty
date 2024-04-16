import React, { useEffect, useState } from "react";
import CRUD from "./component/CRUD";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATEDISCUSSION } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import { GETDISCUSSION, GETDISCUSSIONBYCOURSE } from "./data/query";

export const UpdateForum = ({ handleOpen, topicId }) => {
  const { data, loading: forumLoading } = useQuery(GETDISCUSSION, {
    variables: {
      Id: topicId,
    },
    fetchPolicy: "no-cache",
  });

  const [loading, setLoading] = useState(false);
  const [updateForum] = useMutation(UPDATEDISCUSSION);

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
      await updateForum({
        variables: {
          topicId: topicId,
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

  useEffect(() => {
    if (data?.discussion_topic[0]) {
      setForum({
        ...forum,
        topic: data?.discussion_topic[0]?.title,
        body: data?.discussion_topic[0]?.description,
      });
    }
  }, [data]);

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
        forumLoading={forumLoading}
      />
    </div>
  );
};
