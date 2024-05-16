import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GETEPISODE } from "./data/query";
import ReactPlayer from "react-player";
import { DashH4 } from "../../../components/Heading";
import { CommentForm } from "../comment/CommentForm";
import { DetailLoader } from "./component/Loader";
import { useParams } from "react-router-dom";
import SectionList from "../section/SectionList";
import CommentList from "../comment/CommentList";
import { EpisodeProgress } from "./component/EpisodeProgress";
import { useEpisodeProgress } from "../../../hooks/useEpisodeProgress";

export const EpisodeDetail = () => {
  const { episode_id } = useParams();
  const [end, setEnd] = useState(false);
  const [commented, setCommented] = useState(false);

  const { data: progress } = useEpisodeProgress(episode_id);

  const { data, loading, refetch } = useQuery(GETEPISODE, {
    variables: {
      episodeId: episode_id,
    },
  });

  const handleEnd = () => {
    setEnd(true);
  };

  useEffect(() => {
    refetch();
  }, [commented]);

  return (
    <>
      {loading ? (
        <DetailLoader />
      ) : (
        <>
          <EpisodeProgress videoEnd={end} />
          <div className="flex flex-wrap gap-6 justify-between">
            <div className="w-full lg:w-[63%]">
              <div className="bg-white mb-4 rounded-lg">
                <div
                  className={`border-b-4 rounded-md ${
                    progress?.course_progress[0]?.course_finished
                      ? "border-red-500"
                      : "border-yellow-500"
                  }`}
                >
                  <ReactPlayer
                    url={`https://api.naifty.academy/media/${data?.curse_episode[0]?.file}`}
                    width="100%"
                    height="60vh"
                    playing={true}
                    controls={true}
                    style={{
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    }}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 },
                      },
                      facebook: {
                        appId: "12345",
                      },
                    }}
                    onEnded={handleEnd}
                  />
                </div>
                <div className="p-6 border-b border-gray-100">
                  <DashH4 text={data?.curse_episode[0]?.title} />
                  <p className="text-sm -mt-4">
                    {data?.curse_episode[0]?.description}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <CommentList commented={commented} episodeId={episode_id} />
                </div>
              </div>
              <CommentForm setCommented={setCommented} episodeId={episode_id} />
            </div>

            <div className="bg-white rounded-lg flex-1 p-6 mb-auto">
              <DashH4 text="Contents" />
              <SectionList
                courseId={data?.curse_episode[0]?.section?.course?.id}
                enrolled={true}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
