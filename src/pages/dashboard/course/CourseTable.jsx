import React, { useContext, useEffect, useState } from "react";
import { Action, TD, Table } from "../../../components/table/Table";
import { useMutation, useQuery } from "@apollo/client";
import { GETINSTRUCTORCOURSE } from "./data/query";
import { AuthContext } from "../../../context/AuthContext";
import { DELETECOURSE } from "./data/mutation";
import { DeleteModal } from "../../../components/modal/Delete";
import { TableLoader } from "../../../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { trimText } from "../../../utils/trimText";
import { ToolTip } from "../../../components/ToolTip";

export const CourseTable = () => {
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [courseId, setCourseId] = useState();

  const [del] = useMutation(DELETECOURSE);
  const { data, loading, refetch, fetchMore } = useQuery(GETINSTRUCTORCOURSE, {
    variables: {
      userId: userId,
    },
  });

  const thead = [
    { head: "Name" },
    { head: "Price" },
    { head: "Status" },
    { head: "enrolled" },
    { head: "Action" },
  ];

  const handleDeleteClick = (courseId) => {
    setOpenDeleteModal(!openDeleteModal);
    setCourseId(courseId);
  };

  const handleDelete = async (courseId) => {
    const { data } = await del({
      variables: {
        courseId: courseId,
      },
      refetchQueries: [GETINSTRUCTORCOURSE, "GET_INST_COURSE"],
    });
    if (data) setOpenDeleteModal(false);
  };

  const handleEditClick = (courseId) => {
    navigate(`/dashboard/update-course/${courseId}`);
  };

  useEffect(() => {
    refetch();
  }, [data]);

  return (
    <>
      {loading ? (
        <TableLoader />
      ) : (
        <Table title="Courses" data={thead} path="/dashboard/create-course">
          {data?.course.map(
            ({ id, name, price, status, enrollments }, index) => {
              return (
                <>
                  <tr className="border p-1" key={id}>
                    <TD>{index + 1}</TD>
                    <TD text={trimText(name, 30)} />
                    <TD text={`$ ${price}`} />
                    <TD>
                      <span className="rounded-xl text-[0.65rem] py-1 px-3 text-center font-semibold leading-3 bg-purple-100/50 text-purple-500 lowercase">
                        {status}
                      </span>
                    </TD>
                    <TD text={enrollments?.length} />
                    <TD>
                      <Link
                        to={`/dashboard/course-list/courses-description/${id}`}
                      >
                        <div className="bg-gray-100/50 py-1 px-2 rounded-2xl flex gap-1 text-xs justify-center text-green-500 relative">
                          <ToolTip text="View More" />
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
                      isApproved={status === "APPROVED"}
                      handleDeleteClick={handleDeleteClick}
                      handleEditClick={handleEditClick}
                    />
                    {openDeleteModal && (
                      <DeleteModal
                        isOpen={openDeleteModal}
                        courseId={courseId}
                        handleModal={() => setOpenDeleteModal(!openDeleteModal)}
                        handleDelete={handleDelete}
                      />
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
