import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATEEPISODE } from "./data/mutation";
import { FileUpload, Input, Textarea } from "../../../components/form/Input";
import { PrimaryButton } from "../../../components/Button";
import { fileUpload } from "../../../axios/mutation";
import { Toast } from "../../../components/Toast";
import { FormModal } from "../../../components/modal/FormModal";

export const EpisodeForm = ({ sectionId, handleOpen, modalUpdate }) => {
  const [createEpisode] = useMutation(CREATEEPISODE);

  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [uploadProgress, setUploadProgress] = useState(0);

  const [video, setVideo] = useState(false);
  const [episode, setEpisode] = useState({
    title: "",
    description: "",
  });

  const handleVideo = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const filePath = await fileUpload("VIDEOS", video, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      await createEpisode({
        variables: {
          sectionId: sectionId,
          title: episode.title,
          description: episode.description,
          file: filePath,
        },
      });
      setLoading(false);
      setClose(false);
      setStatus({
        ...status,
        success: true,
      });
      setEpisode({ ...episode, title: "", description: "" });
      setVideo("");
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
          text="Episode Successfully created!"
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
      <FormModal title="Episode" loading={loading} handleOpen={handleOpen}>
        <form className="p-6 top-0" onSubmit={handleSubmit}>
          <Input
            id="name"
            label="Episode Title"
            type="text"
            placeholder="eg: Variables"
            value={episode.title}
            onChange={(e) => {
              setEpisode({ ...episode, title: e.target.value });
            }}
            isRequired={true}
          />
          <Textarea
            id="Description"
            label="Description"
            placeholder="Your description here"
            value={episode.description}
            onChange={(e) => {
              setEpisode({ ...episode, description: e.target.value });
            }}
            isRequired={false}
          />
          <FileUpload
            id="Video"
            label="Video"
            onChange={handleVideo}
            thumbnail={video}
            isRequired={true}
            accept=".mp4,.avi"
          />
          {video && uploadProgress > 0 && (
            <div className="w-full bg-gray-300 h-5 py-0.5 rounded-full text-center text-xs font-medium text-white relative mb-4">
              <div
                className={`bg-purple-600/20 leading-none rounded-full h-full z-0 absolute top-0 left-0`}
                style={{ width: `${uploadProgress}%` }}
              ></div>
              {uploadProgress}%
            </div>
          )}
          <PrimaryButton
            text={loading ? "•••" : "Submit"}
            isDisabled={loading ? true : false}
          />
        </form>
      </FormModal>
    </>
  );
};
