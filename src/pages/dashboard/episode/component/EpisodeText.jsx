import React from "react";
import { useEpisodeProgress } from "../../../../hooks/useEpisodeProgress";
import { Link } from "react-router-dom";
import { ToolTip } from "../../../../components/ToolTip";

export const EpisodeText = ({ episodeId, courseId, enrolled, title }) => {
  const { data, loading } = useEpisodeProgress(episodeId);

  return (
    <Link
      to={`/dashboard/courses/${courseId}/section/episode/${episodeId}`}
      onClick={(e) => (enrolled ? "" : e.preventDefault())}
      className={`font-medium relative group ${loading ? "animate-pulse" : ""}
       ${enrolled ? "text-purple-500" : "text-red-900"}
      `}
      state={{ episodeId: episodeId }}
      disabled={enrolled ? false : true}
    >
      {!enrolled && <ToolTip text="Enroll to unlock course" />}
      {data?.course_progress[0] &&
        (data?.course_progress[0]?.course_finished ? (
          <ToolTip text="You have finished this" />
        ) : (
          <ToolTip text="You have not finished this" />
        ))}
      <li className="flex gap-2 mt-2 text-xs rounded-md ">
        {enrolled ? (
          data?.course_progress[0]?.course_finished ? (
            <svg
              className="w-4 h-4 fill-green-500 my-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          ) : (
            <svg
              className="w-3 h-3 fill-current my-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
            </svg>
          )
        ) : (
          <svg
            className="w-3 h-3 fill-current my-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
          </svg>
        )}
        <div
          className={`flex justify-between flex-1 ${
            data?.course_progress[0]
              ? data?.course_progress[0]?.course_finished
                ? "text-green-500"
                : "text-yellow-500"
              : ""
          }`}
        >
          <span>{title}</span>
          <span>4:30</span>
        </div>
      </li>
    </Link>
  );
};
