import React from "react";
import { Input, Textarea } from "../../../../components/form/Input";
import { PrimaryButton } from "../../../../components/Button";
import { FormModal } from "../../../../components/modal/FormModal";

const CRUD = ({
  handleSubmit,
  handleOpen,
  loading,
  forum,
  setForum,
  forumLoading,
}) => {
  return (
    <FormModal title="Discussion" loading={loading} handleOpen={handleOpen}>
      <form className="p-6 relative" onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Topic"
          type="text"
          placeholder="eg: what is variable"
          value={forumLoading ? "•••" : forum.topic}
          onChange={(e) => {
            setForum({ ...forum, topic: e.target.value });
          }}
          isRequired={true}
          disabled={loading || forumLoading ? true : false}
        />
        <Textarea
          id="Description"
          label="Description"
          placeholder="eg: Your description here"
          value={forumLoading ? "•••" : forum.body}
          onChange={(e) => {
            setForum({ ...forum, body: e.target.value });
          }}
          isRequired={true}
          disabled={loading || forumLoading ? true : false}
        />
        <PrimaryButton
          text={loading || forumLoading ? "•••" : "Submit"}
          isDisabled={loading || forumLoading ? true : false}
        />
      </form>
    </FormModal>
  );
};

export default CRUD;
