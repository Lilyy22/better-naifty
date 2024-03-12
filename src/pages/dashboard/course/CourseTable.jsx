import React, { useContext, useEffect, useState } from "react";
import { Action, TD, Table } from "../../../components/table/Table";
import { useMutation, useQuery } from "@apollo/client";
import { GETINSTRUCTORCOURSE } from "./data/query";
import { AuthContext } from "../../../context/AuthContext";
import { DELETECOURSE } from "./data/mutation";
import { DeleteModal } from "../../../components/modal/Delete";
import { TableLoader } from "../../../components/Loader";
import { useNavigate } from "react-router-dom";

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
          {data?.course.map(({ id, name, price, status }, index) => {
            return (
              <>
                <tr className="border p-1" key={id}>
                  <TD>{index + 1}</TD>
                  <TD text={name} />
                  <TD text={`$ ${price}`} />
                  <TD>
                    <span className="rounded-xl text-[0.65rem] py-1 px-3 text-center font-semibold leading-3 bg-purple-100/50 text-purple-500 lowercase">
                      {status}
                    </span>
                  </TD>
                  <Action
                    id={id}
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
          })}
        </Table>
      )}
    </>
  );
};
