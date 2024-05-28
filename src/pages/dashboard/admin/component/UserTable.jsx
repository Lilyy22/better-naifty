import React, { useState } from "react";
import { Toast } from "../../../../components/Toast";
import { TableLoader } from "../../../../components/Loader";
import { TD, Table } from "../../../../components/table/Table";
import { ToolTip } from "../../../../components/ToolTip";
import { DeleteModal } from "../../../../components/modal/Delete";
import { RoleModal } from "../../../../components/modal/FormModal";
import { useMutation } from "@apollo/client";
import { DELETEUSER, UPDATEUSERROLE, UPDATEUSERSTATUS } from "../data/mutation";

let PageSize = 10;
const UserTable = ({
  data,
  loading,
  GETUSERS,
  setPage,
  page,
  itemPerPage,
  totalCount,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [userId, setUserId] = useState("");
  const [userStatus, setUserStatus] = useState();
  const [userRole, setUserRole] = useState({
    is_instructor: false,
    is_superuser: false,
  });

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [openRoleModal, setOpenRoleModal] = useState(false);

  const [delUser] = useMutation(DELETEUSER);
  const [statusUser] = useMutation(UPDATEUSERSTATUS);
  const [roleUser] = useMutation(UPDATEUSERROLE);

  const handleDeleteClick = (userId) => {
    setOpenDeleteModal(!openDeleteModal);
    setUserId(userId);
  };

  const handleStatusClick = (userId, is_active) => {
    setOpenStatusModal(!openStatusModal);
    setUserStatus(!is_active);
    setUserId(userId);
  };

  const handleRoleClick = (userId, isInstructor, isSuperuser) => {
    setOpenRoleModal(!openRoleModal);
    setUserRole({ is_superuser: isSuperuser, is_instructor: isInstructor });
    setUserId(userId);
  };

  const handleDelete = async (userId) => {
    try {
      const { data } = await delUser({
        variables: {
          userId: userId,
        },
        refetchQueries: [delUser, "DEL_USER"],
      });
      if (data) setOpenDeleteModal(false);

      setClose(false);
      setStatus({
        ...status,
        error: false,
        success: true,
        successContent: "You have Permanently Deleted a User.",
      });
    } catch (error) {
      setClose(false);
      setStatus({
        ...status,
        error: true,
        success: false,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };

  const handleStatus = async (userId, status) => {
    try {
      const { data } = await statusUser({
        variables: {
          userId: userId,
          status: status,
        },
        refetchQueries: [GETUSERS, "GET_USERS"],
      });
      if (data) setOpenStatusModal(false);
      setClose(false);
      setStatus({
        ...status,
        error: false,
        success: true,
        successContent: "You have Changed User Status.",
      });
    } catch (error) {
      setClose(false);
      setStatus({
        ...status,
        error: true,
        success: false,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };

  const handleRole = async (userId, isInstructor, isSuperuser) => {
    try {
      const { data } = await roleUser({
        variables: {
          userId: userId,
          role: isInstructor,
          admin: isSuperuser,
        },
        refetchQueries: [GETUSERS, "GET_USERS"],
      });
      if (data) setOpenRoleModal(false);
      setClose(false);
      setStatus({
        ...status,
        error: false,
        success: true,
        successContent: "You have Changed User Role.",
      });
    } catch (error) {
      setClose(false);
      setStatus({
        ...status,
        error: true,
        success: false,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };

  const thead = [
    { head: "Name" },
    { head: "Email" },
    { head: "Status" },
    { head: "Role" },
    // { head: "Action" },
  ];
  return (
    <>
      {status.success && (
        <Toast
          text={status.successContent ?? "Successfull!"}
          isSuccess={true}
          close={close}
          setClose={setClose}
        />
      )}
      {status.error && (
        <Toast
          text={status.errorContent ?? "Something went wrong."}
          isSuccess={false}
          close={close}
          setClose={setClose}
        />
      )}

      {loading ? (
        <TableLoader />
      ) : (
        <>
          <Table
            title="Users"
            data={thead}
            noCrud={true}
            setPage={setPage}
            page={page}
            itemPerPage={itemPerPage}
            totalCount={totalCount}
          >
            {data?.users?.map(
              (
                {
                  id,
                  email,
                  is_active,
                  is_instructor,
                  is_superuser,
                  studentprofile,
                },
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
                      <TD>
                        <td className="text-start flex gap-1 p-1">
                          <button
                            type="button"
                            className="inline rounded relative group"
                            onClick={() =>
                              handleRoleClick(id, is_instructor, is_superuser)
                            }
                          >
                            <ToolTip text="Change Role" />
                            <span className="bg-purple-100/50 text-purple-800 text-xs px-2 py-1 rounded-xl">
                              {is_superuser
                                ? "Admin"
                                : is_instructor && is_superuser === false
                                ? "Instructor"
                                : "Student"}
                            </span>
                          </button>
                        </td>
                      </TD>
                      <div className="flex gap-1">
                        <td className="text-start flex gap-1 p-1">
                          <button
                            type="button"
                            className="inline rounded relative group"
                            onClick={() => handleStatusClick(id, is_active)}
                          >
                            <ToolTip
                              text={is_active ? "Deactivate" : "Activate"}
                            />
                            {is_active ? (
                              <svg
                                className="w-5 h-5 fill-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                              >
                                <path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5 fill-red-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                              >
                                <path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
                              </svg>
                            )}
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
                      </div>
                      {openDeleteModal && (
                        <DeleteModal
                          isOpen={openDeleteModal}
                          courseId={userId}
                          handleModal={() =>
                            setOpenDeleteModal(!openDeleteModal)
                          }
                          handleDelete={handleDelete}
                        />
                      )}
                      {openStatusModal && (
                        <DeleteModal
                          text="Are You sure you want to change user Status?"
                          isOpen={openStatusModal}
                          courseId={userId}
                          statusUser={userStatus}
                          handleModal={() =>
                            setOpenStatusModal(!openStatusModal)
                          }
                          handleDelete={handleStatus}
                        />
                      )}
                      {openRoleModal && (
                        <RoleModal
                          isOpen={openRoleModal}
                          userId={userId}
                          // role={role}
                          handleModal={() => setOpenRoleModal(!openRoleModal)}
                          handleRole={handleRole}
                        />
                      )}
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

export default UserTable;
