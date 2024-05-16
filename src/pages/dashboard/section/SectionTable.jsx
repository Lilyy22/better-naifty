import React, { useEffect, useState } from "react";
import { TD, Table } from "../../../components/table/Table";
import { useMutation, useQuery } from "@apollo/client";
import { GETINSTRUCTORSECTION } from "./data/query";
import { DeleteModal } from "../../../components/modal/Delete";
import { TableLoader } from "../../../components/Loader";
import { formattedDate } from "../../../utils/formattedDate";
import { EpisodeForm } from "../episode/EpisodeForm";
import { Link } from "react-router-dom";
import { DELETESECTION } from "./data/mutation";
import { trimText } from "../../../utils/trimText";
import { CreateSection } from "./CreateSection";
import { UpdateSection } from "./UpdateSection";
import { PrimaryButton } from "../../../components/Button";
import { ToolTip } from "../../../components/ToolTip";

export const SectionTable = ({ courseId, setOpenTab }) => {
  const [modalUpdate, setModalUpdate] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEpisodeModal, setOpenEpisodeModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const [sectionId, setSectionId] = useState();

  const [del] = useMutation(DELETESECTION);
  const { data, loading, refetch } = useQuery(GETINSTRUCTORSECTION, {
    variables: {
      courseId: courseId,
    },
  });

  const thead = [
    { head: "Title" },
    { head: "Description" },
    { head: "Episodes" },
    { head: "Last Updated" },
    { head: "" },
    { head: "Action" },
  ];

  const handleDeleteClick = (sectionId) => {
    setOpenDeleteModal(!openDeleteModal);
    setSectionId(sectionId);
  };

  const handleEpisodeModal = (sectionId) => {
    setOpenEpisodeModal(!openEpisodeModal);
    setSectionId(sectionId);
  };

  const handleEditModal = (sectionId) => {
    setOpenEditModal(!openEditModal);
    setSectionId(sectionId);
  };

  const handleDelete = async (id) => {
    const { data } = await del({
      variables: {
        sectionId: id,
      },
      refetchQueries: [GETINSTRUCTORSECTION, "GET_INST_SECTION"],
    });
    if (data) setOpenDeleteModal(false);
  };

  useEffect(() => {
    refetch();
    // setOpenTab(2);
  }, [data, modalUpdate]);

  return (
    <>
      {loading ? (
        <TableLoader />
      ) : (
        <>
          <PrimaryButton
            text="Create"
            customStyle="float-right"
            handleClick={() => setOpenCreateModal(!openCreateModal)}
          >
            <svg
              className="w-2.5 h-2.5 fill-current leading-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </PrimaryButton>
          <Table title="Sections" data={thead} noCrud={true}>
            {data?.course_section.map(
              (
                { id, title, description, episodes, course, updated_at },
                index
              ) => {
                return (
                  <tr className="border p-1" key={id}>
                    <TD>{index + 1}</TD>
                    <TD>{trimText(title, 20)}</TD>
                    <TD>{trimText(description, 20)}</TD>
                    <TD>
                      <span className="text-xs font-medium bg-purple-50 py-1 px-2 rounded">
                        {episodes?.length}
                      </span>
                    </TD>
                    <TD text={formattedDate(updated_at)} />
                    <TD>
                      <Link
                        className="relative group"
                        to={`/dashboard/course-list/courses-description/${courseId}/section/${id}`}
                      >
                        <span className="invisible absolute -left-1 -top-1 text-xs whitespace-nowrap rounded shadow-lg py-2 px-4 bg-gray-900 text-white -mt-8 group-hover:visible z-10">
                          View More
                        </span>
                        <div className="bg-gray-100/50 py-0.5 px-2 rounded-2xl flex gap-1 text-xs justify-center text-purple-600">
                          <svg
                            className="w-3 h-3 fill-current leading-none my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                          </svg>
                          More
                        </div>
                      </Link>
                    </TD>
                    <div className="flex gap-1 px-4 py-2">
                      <td className="text-start flex gap-1">
                        {!(course?.status === "APPROVED") && (
                          <button
                            type="button"
                            className="bg-red-100/50 p-2 inline rounded relative group hover:bg-red-600"
                            onClick={() => handleDeleteClick(id)}
                          >
                            <ToolTip text="Delete" />
                            <svg
                              className="w-3 h-3 fill-red-500 group-hover:fill-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                            </svg>
                          </button>
                        )}

                        <button
                          type="button"
                          className="bg-green-100/50 p-2 inline rounded relative group hover:bg-green-600"
                          onClick={() => handleEditModal(id)}
                        >
                          <ToolTip text="Edit" />
                          <svg
                            className="w-3 h-3 fill-green-500 group-hover:fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                          </svg>
                        </button>

                        <button
                          className="bg-gray-200/40 rounded px-2 py-1.5 my-auto flex gap-1 relative group hover:bg-gray-200"
                          onClick={() => handleEpisodeModal(id)}
                        >
                          <ToolTip text="Add Episode" />
                          <svg
                            className="w-2 h-2 fill-current leading-none my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                          </svg>
                          <span className="text-xs">Episode</span>
                        </button>
                      </td>
                    </div>

                    {openDeleteModal && (
                      <DeleteModal
                        isOpen={openDeleteModal}
                        courseId={sectionId}
                        handleModal={() => setOpenDeleteModal(!openDeleteModal)}
                        handleDelete={handleDelete}
                      />
                    )}
                    {openEpisodeModal && (
                      <div className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/20">
                        <EpisodeForm
                          sectionId={sectionId}
                          handleOpen={() =>
                            setOpenEpisodeModal(!openEpisodeModal)
                          }
                          modalUpdate={() => setModalUpdate(!modalUpdate)}
                        />
                      </div>
                    )}
                    {openEditModal && (
                      <div className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/20">
                        <UpdateSection
                          sectionId={sectionId}
                          handleOpen={() => setOpenEditModal(!openEditModal)}
                          modalUpdate={() => setModalUpdate(!modalUpdate)}
                        />
                      </div>
                    )}
                  </tr>
                );
              }
            )}
            {openCreateModal && (
              <div className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/20">
                <CreateSection
                  courseId={courseId}
                  handleOpen={() => setOpenCreateModal(!openCreateModal)}
                  modalUpdate={() => setModalUpdate(!modalUpdate)}
                />
              </div>
            )}
          </Table>
        </>
      )}
    </>
  );
};
