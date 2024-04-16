import React from "react";
import { DashForm } from "../../../../components/form/Form";
import { Input, Textarea } from "../../../../components/form/Input";
import { PrimaryButton } from "../../../../components/Button";

const CRUD = ({
  handleSubmit,
  handleOpen,
  loading,
  forum,
  setForum,
  forumLoading,
}) => {
  return (
    <div className="overflow-x-hidden fixed top-0 flex left-0 z-40 justify-center items-center min-h-full w-full bg-gray-700/20">
      <div className="w-full max-w-xl xl:max-w-3xl">
        <DashForm title="Discussion">
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
              text={loading ? "•••" : "Submit"}
              isDisabled={loading ? true : false}
            />
          </form>
        </DashForm>
      </div>
    </div>
  );
};

export default CRUD;
