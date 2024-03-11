import { useState } from "react";
import { PrimaryButton } from "../../../components/Button";
import { Textarea } from "../../../components/form/Input";
import { DashForm } from "../../../components/form/Form";

export const CommentForm = () => {
  const [comment, setComment] = useState();

  return (
    <DashForm title="Leave a comment">
      <form className="p-6 top-0">
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
        <PrimaryButton type="submit" text="Post Comment" />
      </form>
    </DashForm>
  );
};
