import React, { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GETCOURSECATEGORY } from "./data/query";
import { TableLoader } from "../../../components/Loader";
import { Action, TD, Table } from "../../../components/table/Table";
import { trimText } from "../../../utils/trimText";
import { DeleteModal } from "../../../components/modal/Delete";
import { DELETECATEGORY } from "./data/mutation";
import { useNavigate } from "react-router-dom";

const CategoryTable = () => {
  const navigate = useNavigate();

  const { data, loading, refetch } = useQuery(GETCOURSECATEGORY);
  const [del] = useMutation(DELETECATEGORY);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [categoryId, setCategoryId] = useState();

  const thead = [{ head: "Name" }, { head: "description" }, { head: "Action" }];

  const handleDeleteClick = (categoryId) => {
    setOpenDeleteModal(!openDeleteModal);
    setCategoryId(categoryId);
  };

  const handleEditClick = (categoryId) => {
    navigate(`/dashboard/update-category/${categoryId}`);
  };

  const handleDelete = async (categoryId) => {
    const { data } = await del({
      variables: {
        categoryId: categoryId,
      },
      refetchQueries: [GETCOURSECATEGORY, "GET_COURSE_CATEGORY"],
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
        <>
          <Table
            title={"Course Category"}
            data={thead}
            path="/dashboard/create-category"
          >
            {data?.course_category?.map(({ id, name, description }, index) => {
              return (
                <tr className="border p-1 hover:bg-gray-50/90" key={id}>
                  <TD>{index + 1}</TD>
                  <TD text={trimText(name, 30)} />
                  <TD text={trimText(description, 30)} />
                  <td className="text-start flex gap-1 p-1">
                    <Action
                      handleDeleteClick={handleDeleteClick}
                      handleEditClick={handleEditClick}
                      id={id}
                    />
                  </td>
                  {openDeleteModal && (
                    <DeleteModal
                      isOpen={openDeleteModal}
                      courseId={categoryId}
                      handleModal={() => setOpenDeleteModal(!openDeleteModal)}
                      handleDelete={handleDelete}
                    />
                  )}
                </tr>
              );
            })}
          </Table>
        </>
      )}
    </>
  );
};

export default CategoryTable;
