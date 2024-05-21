import React, { useMemo, useState } from "react";
import { TD, Table } from "../../../components/table/Table";
import { TableLoader } from "../../../components/Loader";
import { useMutation, useQuery } from "@apollo/client";
import { GETUSERS } from "./data/query";
import Pagination from "../../../components/Pagination";
import { ToolTip } from "../../../components/ToolTip";
import { DELETEUSER } from "./data/mutation";

let PageSize = 10;
const UsersList = ({ instructor }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [userId, setUserId] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [delUser] = useMutation(DELETEUSER);
  const { data, loading } = useQuery(GETUSERS, {
    variables: {
      role: instructor ? "True" : "False",
    },
    fetchPolicy: "network-only",
  });

  const handleDeleteClick = (userId) => {
    setOpenDeleteModal(!openDeleteModal);
    setUserId(userId);
  };

  const handleDelete = async (userId) => {
    const { data } = await delUser({
      variables: {
        userId: userId,
      },
      refetchQueries: [delUser, "DEL_USER"],
    });
    if (data) setOpenDeleteModal(false);
  };

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return data?.users?.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  const thead = [
    { head: "Name" },
    { head: "Email" },
    { head: "Role" },
    { head: "Status" },
    // { head: "Action" },
  ];
  return (
    <>
      {loading ? (
        <TableLoader />
      ) : (
        <>
          <Table title="Users" data={thead} noCrud={true}>
            {data?.users?.map(
              (
                { id, email, is_active, is_instructor, studentprofile },
                index
              ) => {
                return (
                  <>
                    <tr className="border p-1" key={id}>
                      <TD>{index + 1}</TD>
                      <TD>
                        <div className="flex gap-2">
                          <div className="rounded-full w-8 h-8 border-b inline-block my-auto">
                            <img
                              className="w-full h-full object-cover rounded-full"
                              src={
                                studentprofile?.profile_picture
                                  ? `https://api.naifty.academy/media/${studentprofile?.profile_picture}`
                                  : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                              }
                              alt="course thumbnail"
                            />
                          </div>
                          <div className="text-xs leading-none my-auto">
                            <p>{studentprofile?.first_name ?? "--"}</p>
                            <p>{studentprofile?.last_name ?? "--"}</p>
                          </div>
                        </div>
                      </TD>
                      <TD text={email} />
                      <TD>
                        <span className="bg-purple-100/50 text-purple-800 text-xs px-2 py-1 rounded-xl">
                          {is_instructor ? "Instructor" : "Student"}
                        </span>
                      </TD>
                      <TD>
                        {is_active ? (
                          <span className="text-green-500 text-xs">
                            {`○ ${is_active}`}
                          </span>
                        ) : (
                          <span className="text-red-500 text-xs">
                            {`○ ${is_active}`}
                          </span>
                        )}
                      </TD>
                      <td className="text-start flex gap-1 p-1">
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
                      </td>
                      <td className="text-start flex gap-1 p-1">
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
                      </td>
                      {/* <Action /> */}
                    </tr>
                  </>
                );
              }
            )}
          </Table>
        </>
      )}
    </>
  );
};

export default UsersList;
