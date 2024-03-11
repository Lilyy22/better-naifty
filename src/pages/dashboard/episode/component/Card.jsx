import React from "react";
import { DashH4 } from "../../../../components/Heading";
import ReactPlayer from "react-player";
import { formattedDate } from "../../../../utils/formattedDate";

export const EpisodeCard = ({ title, description, file, updatedAt }) => {
  return (
    <>
      <div className="bg-white rounded-lg mb-4 md:w-1/4">
        <ReactPlayer
          url={file}
          width="100%"
          height="auto"
          playing={true}
          controls={true}
        />
        <div className="p-6">
          <h3 className="font-semibold font-mont text-sm mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          <span className="block text-right text-xs text-gray-400">
            {formattedDate(updatedAt)}
          </span>
        </div>
      </div>
    </>
  );
};
