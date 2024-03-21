import React, { useState } from "react";
import { EpisodeCard } from "../episode/component/Card";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GETSECTION } from "./data/query";
import { DashH4 } from "../../../components/Heading";
import { GoBack } from "../../../components/Button";
import DataNotFound from "../../../components/DataNotFound";
import { DELETEEPISODE } from "../episode/data/mutation";
import { DeleteModal } from "../../../components/modal/Delete";

export const SectionDetail = () => {
  const { section_url } = useParams();

  const [episodeId, setEpisodeId] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [del] = useMutation(DELETEEPISODE);
  const { data } = useQuery(GETSECTION, {
    variables: {
      sectionId: section_url,
    },
  });

  const handleDeleteClick = (episodeId) => {
    setOpenDeleteModal(!openDeleteModal);
    setEpisodeId(episodeId);
  };

  const handleDelete = async (episodeId) => {
    const { data } = await del({
      variables: {
        episodeId: episodeId,
      },
      refetchQueries: [GETSECTION, "GET_SECTION"],
    });
    if (data) setOpenDeleteModal(false);
  };

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
        <DataNotFound text="No Episodes for this Section." />
      ) : (
        <>
          <DashH4 text="Episodes" />
          <div className="flex flex-wrap gap-2 xl:gap-4">
            {episodes?.map(({ id, title, description, file, updated_at }) => {
              return (
                <EpisodeCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  file={file}
                  updatedAt={updated_at}
                  handleDeleteClick={handleDeleteClick}
                />
              );
            })}
          </div>
          {openDeleteModal && (
            <DeleteModal
              handleDelete={handleDelete}
              courseId={episodeId}
              isOpen={openDeleteModal}
              handleModal={() => setOpenDeleteModal(!openDeleteModal)}
            />
          )}
        </>
      )}
    </>
  );
};
