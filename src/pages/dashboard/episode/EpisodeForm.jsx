import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATEEPISODE } from "./data/mutation";
import { DashForm } from "../../../components/form/Form";
import { FileUpload, Input, Textarea } from "../../../components/form/Input";
import { PrimaryButton } from "../../../components/Button";
import { fileUpload } from "../../../axios/mutation";
import { Toast } from "../../../components/Toast";
import { useNavigate } from "react-router-dom";

export const EpisodeForm = ({ sectionId, handleOpen }) => {
  const navigate = useNavigate();
  const [createEpisode] = useMutation(CREATEEPISODE);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

      const { error } = await createEpisode({
        variables: {
          sectionId: sectionId,
          title: episode.title,
          description: episode.description,
          file: filePath,
        },
      });
      setLoading(false);

      if (!error) {
        setSuccess(true);
        setEpisode({ ...episode, title: "", description: "" });
        setVideo("");
        setTimeout(() => {
          handleOpen();
        }, 1000);
      }
    } catch (error) {}
  };
  return (
    <>
      {success && (
        <Toast text="Episode Successfully created!" isSuccess={true} />
      )}
      <DashForm title="Episode Form">
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
        <form className="p-6 top-0" onSubmit={handleSubmit}>
          <Input
            id="name"
            label="Episode Title"
            type="text"
            placeholder="eg: Python"
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
      </DashForm>
    </>
  );
};
