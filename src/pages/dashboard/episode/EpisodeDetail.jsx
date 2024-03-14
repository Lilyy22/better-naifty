import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GETEPISODE } from "./data/query";
import ReactPlayer from "react-player";
import { DashH4 } from "../../../components/Heading";
import { CommentForm } from "../comment/CommentForm";
import { Loader } from "./component/Loader";
import { useParams } from "react-router-dom";
import SectionList from "../section/SectionList";

export const EpisodeDetail = () => {
  const { episode_id } = useParams();
  const [commented, setCommented] = useState(false);

  const { data, loading, refetch } = useQuery(GETEPISODE, {
    variables: {
      episodeId: episode_id,
    },
  });

  useEffect(() => {
    refetch();
  }, [commented]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-6 justify-between">
          <div className="w-full lg:w-[63%]">
            <div className="bg-white mb-4 rounded-lg">
              <ReactPlayer
                url={`https://naifty.abelayalew.dev/media/${data?.curse_episode[0]?.file}`}
                width="100%"
                height="100%"
                playing={true}
                controls={true}
                style={{ borderRadius: 30 }}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                  facebook: {
                    appId: "12345",
                  },
                }}
              />
              <div className="p-6">
                <DashH4 text={data?.curse_episode[0]?.title} />
                <p className="text-sm -mt-4">
                  {data?.curse_episode[0]?.description}
                </p>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm">0 Comments</p>
                {/* commentlist */}
              </div>
            </div>
            <CommentForm setCommented={setCommented} />
          </div>

          <div className="bg-white rounded-lg flex-1 p-6 mb-auto">
            <DashH4 text="Contents" />
            <SectionList
              courseId={data?.curse_episode[0]?.section?.course?.id}
              enrolled={true}
            />
          </div>
        </div>
      )}
    </>
  );
};
