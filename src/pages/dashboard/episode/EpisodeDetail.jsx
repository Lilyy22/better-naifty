import { useQuery } from "@apollo/client";
import React from "react";
import { GETEPISODE } from "./data/query";
import ReactPlayer from "react-player";
import { DashH4 } from "../../../components/Heading";
import { CommentForm } from "../comment/CommentForm";
import { Loader } from "./component/Loader";
import { useLocation } from "react-router-dom";

export const EpisodeDetail = () => {
  const { state } = useLocation();
  const { data, loading } = useQuery(GETEPISODE, {
    variables: {
      episodeId: state?.episodeId,
    },
  });
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
              </div>
            </div>
            <CommentForm />
          </div>

          <div className="bg-white rounded-lg flex-1 p-6 mb-auto">
            <DashH4 text="Contents" />
            {/* <ol className="list-decimal list-outside">
            {faqData.map(({ section, id, episodes }) => {
              return (
                <SectionDropDown
                  key={id}
                  section={section}
                  episodes={episodes}
                />
              );
            })}
          </ol> */}
          </div>
        </div>
      )}
    </>
  );
};
