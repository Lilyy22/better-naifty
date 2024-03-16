import { useContext, useState } from "react";
import { PrimaryButton } from "../../../components/Button";
import { Textarea } from "../../../components/form/Input";
import { DashForm } from "../../../components/form/Form";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation } from "@apollo/client";
import { CREATECOMMENT } from "./data/mutation";
import { Toast } from "../../../components/Toast";

export const CommentForm = ({ setCommented, episodeId }) => {
  const { userId } = useContext(AuthContext);
  const [comment, setComment] = useState();

  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [createComment, { loading }] = useMutation(CREATECOMMENT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComment({
        variables: {
          userId: userId,
          comment: comment,
          episodeId: episodeId,
        },
      });
      setComment("");
      setCommented(true);
      setClose(false);
      setStatus({ ...status, success: true });
    } catch (error) {
      setClose(false); // incase toast is closed
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
          text="Comment Sent!"
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
      <DashForm title="Leave a comment">
        <form className="px-6 pb-6 top-0" onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="Add some comment here"
              required={true}
            />
          </div>
          <PrimaryButton
            type="submit"
            text={loading ? "•••" : "Post Comment"}
          />
        </form>
      </DashForm>
    </>
  );
};
