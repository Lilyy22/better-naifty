import React, { useEffect, useState } from "react";
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
          {/* <nav className="float-right" aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    fetchMore({
                      variables: {
                        offset: data?.course?.length,
                        limit: 5,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev;
                        return {
                          course: [...fetchMoreResult.course],
                        };
                      },
                    })
                  }
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav> */}
        </>
      )}
    </>
  );
};

export default CategoryTable;
