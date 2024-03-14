import React, { useEffect, useState } from "react";
import { Action, TD, Table } from "../../../components/table/Table";
import { useMutation, useQuery } from "@apollo/client";
import { GETINSTRUCTORSECTION } from "./data/query";
import { DeleteModal } from "../../../components/modal/Delete";
import { TableLoader } from "../../../components/Loader";
import { formattedDate } from "../../../utils/formattedDate";
import { EpisodeForm } from "../episode/EpisodeForm";
import { Link, useNavigate } from "react-router-dom";
import { DELETESECTION } from "./data/mutation";

export const SectionTable = () => {
  const navigate = useNavigate();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEpisodeModal, setOpenEpisodeModal] = useState(false);

  const [sectionId, setSectionId] = useState();

  const [del] = useMutation(DELETESECTION);
  const { data, loading, refetch } = useQuery(GETINSTRUCTORSECTION);

  const thead = [
    { head: "Title" },
    { head: "Course" },
    { head: "Last Updated" },
    { head: "" },
    { head: "Action" },
  ];

  const handleDeleteClick = (sectionId) => {
    setOpenDeleteModal(!openDeleteModal);
    setSectionId(sectionId);
  };

  const handleEditClick = (sectionId) => {
    navigate(`/dashboard/update-section/${sectionId}`);
  };

  const handleEpisodeModal = (sectionId) => {
    setOpenEpisodeModal(!openEpisodeModal);
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
  }, [data]);

  return (
    <>
      {loading ? (
        <TableLoader />
      ) : (
        <Table title="Sections" data={thead} path="/dashboard/create-section">
          {data?.course_section.map(
            ({ id, title, course, updated_at }, index) => {
              return (
                <>
                  <tr className="border p-1" key={id}>
                    <TD>{index + 1}</TD>

                    <TD>
                      {/* <Link
                        className="text-[0.79rem] text-blue-500 font-medium"
                        to={`${id}`}
                      >
                    </Link> */}
                      {title}
                    </TD>
                    <TD text={course.name} />
                    <TD text={formattedDate(updated_at)} />
                    <TD>
                      <Link className="relative group" to={`${id}`}>
                        <span class="invisible absolute -left-1 -top-1 text-xs whitespace-nowrap rounded shadow-lg py-2 px-3 bg-gray-900 text-white -mt-8 group-hover:visible z-10">
                          View More
                        </span>
                        <div className="bg-gray-100/50 py-1 rounded-2xl flex gap-1 text-xs justify-center text-purple-400">
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
                    <Action
                      id={id}
                      handleDeleteClick={handleDeleteClick}
                      handleEditClick={handleEditClick}
                    >
                      <button
                        className="bg-gray-200/60 rounded px-2 py-1.5 my-auto flex gap-1 relative group"
                        onClick={() => handleEpisodeModal(id)}
                      >
                        <span class="invisible absolute -left-1 -top-1 text-xs whitespace-nowrap rounded shadow-lg py-2 px-3 bg-gray-900 text-white -mt-8 group-hover:visible z-10">
                          Add Episode
                        </span>
                        <svg
                          className="w-2 h-2 fill-current leading-none my-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                        </svg>
                        <span className="text-xs">Episode</span>
                      </button>
                    </Action>

                    {openDeleteModal && (
                      <DeleteModal
                        isOpen={openDeleteModal}
                        courseId={sectionId}
                        handleModal={() => setOpenDeleteModal(!openDeleteModal)}
                        handleDelete={handleDelete}
                      />
                    )}
                    {openEpisodeModal && (
                      <div className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/10 ">
                        <EpisodeForm
                          sectionId={sectionId}
                          handleOpen={() =>
                            setOpenEpisodeModal(!openEpisodeModal)
                          }
                        />
                      </div>
                    )}
                  </tr>
                </>
              );
            }
          )}
        </Table>
      )}
    </>
  );
};
