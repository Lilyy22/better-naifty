import React from "react";
import { EpisodeCard } from "../episode/component/Card";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GETSECTION } from "./data/query";
import { DashH4 } from "../../../components/Heading";
import { GoBack } from "../../../components/Button";

export const SectionDetail = () => {
  const { section_url } = useParams();

  const { data } = useQuery(GETSECTION, {
    variables: {
      sectionId: section_url,
    },
  });

  const episodes = data?.course_section[0]?.episodes;
  return (
    <>
      <GoBack text="Back" pathname="/dashboard/section-list" />
      <DashH4 text="Section Detail" />
      <div className="p-4 mb-8 bg-white rounded-lg">
        <h1 className="font-semibold text-gray-400/70 text-xs">Title</h1>
        <DashH4 text={data?.course_section[0]?.title} />
        <h1 className="font-semibold text-gray-400/70 text-xs">Description</h1>
        <p>{data?.course_section[0]?.description}</p>
      </div>
      {episodes?.length === 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="font-semibold text-lg text-gray-400">
            No Episodes for this Section.
          </h1>
        </div>
      ) : (
        <>
          <DashH4 text="Episodes" />
          <div className="flex flex-wrap gap-4">
            {episodes?.map(({ id, title, description, file, updated_at }) => {
              return (
                <EpisodeCard
                  key={id}
                  title={title}
                  description={description}
                  file={file}
                  updatedAt={updated_at}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
