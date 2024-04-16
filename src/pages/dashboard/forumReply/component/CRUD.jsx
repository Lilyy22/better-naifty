import React from "react";
import { Textarea } from "../../../../components/form/Input";
import { PrimaryButton } from "../../../../components/Button";

export const CRUD = ({
  handleSubmit,
  reply,
  setReply,
  loading,
  replyLoading,
}) => {
  return (
    <form className="group" onSubmit={handleSubmit}>
      <div className="mb-2 w-full ">
        <Textarea
          id="reply"
          value={replyLoading ? "•••" : reply}
          onChange={(e) => {
            setReply(e.target.value);
          }}
          placeholder="Add some reply here"
          required={true}
        />
      </div>
      <PrimaryButton
        customStyle="invisible group-focus-within:visible group-focus-within:mb-4"
        type="submit"
        text={replyLoading || loading ? "•••" : "Submit"}
      />
    </form>
  );
};
