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
  }, [refetch]);

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
                      <Link
                        className="text-[0.79rem] text-blue-500 font-medium"
                        to={`${id}`}
                      >
                        {title}
                      </Link>
                    </TD>
                    <TD text={course.name} />
                    <TD text={formattedDate(updated_at)} />

                    <Action
                      id={id}
                      handleDeleteClick={handleDeleteClick}
                      handleEditClick={handleEditClick}
                    >
                      <button
                        className="bg-gray-200/60 rounded px-2 py-1.5 my-auto flex gap-1 relative group"
                        onClick={() => handleEpisodeModal(id)}
                      >
                        <span class="invisible absolute -left-1 -top-1 text-xs whitespace-nowrap rounded shadow-lg py-2 px-3 bg-gray-900 text-white -mt-8 group-hover:visible">
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
