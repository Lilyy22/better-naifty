import React, { useEffect, useState } from "react";
import { EpisodeCard } from "../episode/component/Card";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GETSECTION } from "./data/query";
import { DashH4, DashH5 } from "../../../components/Heading";
import DataNotFound from "../../../components/DataNotFound";
import { DELETEEPISODE } from "../episode/data/mutation";
import { DeleteModal } from "../../../components/modal/Delete";
import UpdateEpisode from "../episode/UpdateEpisode";
import { Loader } from "../episode/component/Loader";
import Breadcrumb from "../../../components/Breadcrumb";

export const SectionDetail = () => {
  const { section_url, course_url } = useParams();
  const breadcrumbs = [
    {
      name: "Course",
      path: `/dashboard/course-list/courses-description/${course_url}`,
    },
    {
      name: "Section",
      path: `/dashboard/course-list/courses-description/${course_url}`,
    },
    {
      name: "Detail",
      path: "",
    },
  ];

  const [episodeId, setEpisodeId] = useState();
  const [episodeUpdate, setEpisodeUpdate] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEpisodeModal, setOpenEpisodeModal] = useState(false);

  const [del] = useMutation(DELETEEPISODE);
  const { data, loading, refetch } = useQuery(GETSECTION, {
    variables: {
      sectionId: section_url,
    },
  });

  const handleDeleteClick = (episodeId) => {
    setOpenDeleteModal(!openDeleteModal);
    setEpisodeId(episodeId);
  };

  const handleEditClick = (episodeId) => {
    setOpenEpisodeModal(!openEpisodeModal);
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
  const isApproved = data?.course_section[0]?.course?.status === "APPROVED";
  const array = [1, 2];

  useEffect(() => {
    refetch();
  }, [episodeUpdate, refetch]);

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <div className="p-4 mb-8 bg-white rounded-lg">
        <DashH5 text="Section" />
        <h1 className="font-semibold text-gray-400/70 text-xs mt-4">Title</h1>
        <DashH4 text={loading ? "•••" : data?.course_section[0]?.title} />
        <h1 className="font-semibold text-gray-400/70 text-xs">Description</h1>
        <p>{loading ? "•••" : data?.course_section[0]?.description}</p>
      </div>
      {episodes?.length === 0 ? (
        <DataNotFound text="No Episodes for this Section." />
      ) : (
        <div className="p-4 mb-8 bg-white rounded-lg">
          <DashH5 text={`Episodes (${episodes?.length})`} />
          <div className="flex flex-wrap gap-2 xl:gap-4 mt-6">
            {loading && array.map((item) => <Loader key={item} />)}
            {episodes?.map(({ id, title, description, file, updated_at }) => {
              return (
                <EpisodeCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  file={file}
                  isApproved={isApproved}
                  updatedAt={updated_at}
                  handleDeleteClick={handleDeleteClick}
                  handleEditClick={handleEditClick}
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
          {openEpisodeModal && (
            <div className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/10 ">
              <UpdateEpisode
                episodeId={episodeId}
                handleOpen={() => setOpenEpisodeModal(!openEpisodeModal)}
                handleEpisodeUpdate={() => setEpisodeUpdate(!episodeUpdate)}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
