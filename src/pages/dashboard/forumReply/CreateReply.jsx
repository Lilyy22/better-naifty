import React, { useContext, useState } from "react";
import { CRUD } from "./component/CRUD";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation } from "@apollo/client";
import { CREATEREPLY } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import { GETTOPICREPLY } from "./data/query";
import { useParams } from "react-router-dom";

export const CreateReply = ({ descriptionLoading }) => {
  const { forum_id } = useParams();

  const { userId } = useContext(AuthContext);
  const [reply, setReply] = useState();

  const [close, setClose] = useState();
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [createReply] = useMutation(CREATEREPLY);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createReply({
        variables: {
          userId: userId,
          reply: reply,
          topicId: forum_id,
        },
        refetchQueries: [GETTOPICREPLY, "GET_TOPIC_REPLY"],
      });
      setClose(false); // set close false incase toast is closed
      setReply("");
      setStatus({
        ...status,
        success: true,
      });
    } catch (error) {
      setClose(false); // set close false incase toast is closed
      setReply("");
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
      {!descriptionLoading && (
        <CRUD reply={reply} setReply={setReply} handleSubmit={handleSubmit} />
      )}
    </div>
  );
};
