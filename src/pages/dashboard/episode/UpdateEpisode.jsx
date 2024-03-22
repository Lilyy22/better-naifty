import React, { useEffect, useState } from "react";
import { FileUpload, Input, Textarea } from "../../../components/form/Input";
import { PrimaryButton } from "../../../components/Button";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATEEPISODE } from "./data/mutation";
import { fileUpload } from "../../../axios/mutation";
import { GETEPISODE } from "./data/query";
import { Toast } from "../../../components/Toast";
import { DashForm } from "../../../components/form/Form";
import { Loader } from "./component/Loader";

const UpdateEpisode = ({ episodeId, handleOpen, handleEpisodeUpdate }) => {
  const [updateEpisode] = useMutation(UPDATEEPISODE);
  const {
    data,
    loading: dataLoading,
    refetch,
  } = useQuery(GETEPISODE, {
    variables: {
      episodeId: episodeId,
    },
  });

  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [uploadProgress, setUploadProgress] = useState(0);

  const [video, setVideo] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const [episode, setEpisode] = useState({
    title: "",
    description: "",
  });

  const handleVideo = (e) => {
    setVideo(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // const filePath = await fileUpload("VIDEOS", video, {
      //   onUploadProgress: (progressEvent) => {
      //     const percentCompleted = Math.round(
      //       (progressEvent.loaded * 100) / progressEvent.total
      //     );
      //     setUploadProgress(percentCompleted);
      //   },
      // });

      let filePath;
      if (selectedFile && video) {
        filePath = await fileUpload("VIDEOS", video, {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        });
      }

      await updateEpisode({
        variables: {
          title: episode.title,
          description: episode.description,
          file: filePath,
          episodeId: episodeId,
        },
      });
      setLoading(false);
      setClose(false);
      setStatus({
        ...status,
        success: true,
      });
      setTimeout(() => {
        handleEpisodeUpdate();
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
    if (!episodeId) {
      // navigate("/dashboard/course-list");
    } else {
      refetch();
      if (data?.curse_episode[0]) {
        setEpisode({
          title: data?.curse_episode[0]?.title,
          description: data?.curse_episode[0]?.description,
        });
        const str = data?.curse_episode[0]?.file;
        const startIndex = str.indexOf("VIDEOS/") + "VIDEOS/".length;
        const extractedText = str.substring(startIndex);
        setVideo(extractedText);
      }
    }
  }, [data?.curse_episode[0]]);

  return (
    <>
      {status.success && (
        <Toast
          text="Episode Successfully updated!"
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
      <div className="relative p-4 w-full max-w-xl h-full xl:max-w-3xl">
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
              placeholder="eg: Variables"
              value={dataLoading ? "•••" : episode.title}
              onChange={(e) => {
                setEpisode({ ...episode, title: e.target.value });
              }}
              isRequired={true}
            />
            <Textarea
              id="Description"
              label="Description"
              placeholder="Your description here"
              value={dataLoading ? "•••" : episode.description}
              onChange={(e) => {
                setEpisode({ ...episode, description: e.target.value });
              }}
              isRequired={false}
            />
            <FileUpload
              id="Video"
              label="Video"
              onChange={handleVideo}
              thumbnail={dataLoading ? "•••" : video}
              isRequired={video ? false : true}
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
      </div>
    </>
  );
};

export default UpdateEpisode;
