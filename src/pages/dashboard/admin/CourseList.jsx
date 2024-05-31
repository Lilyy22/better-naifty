import React, { useEffect, useState } from "react";
import { TD, Table } from "../../../components/table/Table";
import { TableLoader } from "../../../components/Loader";
import { useMutation, useQuery } from "@apollo/client";
import { GETCOURSE, GETCOURSECOUNT } from "./data/query";
import { formattedDate } from "../../../utils/formattedDate";
import { ApproveModal } from "../../../components/modal/Approve";
import { APPROVECOURSE } from "./data/mutation";
import { ToolTip } from "../../../components/ToolTip";
import { Toast } from "../../../components/Toast";
import { DeleteModal } from "../../../components/modal/Delete";
import { DELETECOURSE } from "../course/data/mutation";
import { trimText } from "../../../utils/trimText";
import { Link } from "react-router-dom";

const CourseList = ({ approved }) => {
  const [page, setPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);

  const [openApproveModal, setOpenApproveModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [courseId, setCourseId] = useState(false);

  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    successContent: "",
    errorContent: "",
  });

  const [del] = useMutation(DELETECOURSE);
  const [approveCourse] = useMutation(APPROVECOURSE);
  const { data: totalCount } = useQuery(GETCOURSECOUNT);

  const { data, loading, refetch } = useQuery(GETCOURSE, {
    variables: {
      status: approved ? "APPROVED" : undefined,
      limit: itemPerPage,
      offset: page * itemPerPage,
    },
  });

  const handleApprove = async (courseId, status) => {
    try {
      await approveCourse({
        variables: {
          courseId: courseId,
          status: status ? "APPROVED" : "REJECTED",
        },
        refetchQueries: [GETCOURSE, "GET_COURSE"],
      });
      setOpenApproveModal(false);
      setClose(false);
      setStatus({
        ...status,
        success: true,
        successContent: status
          ? "Course Approved Successfully"
          : "Course Rejected Successfully",
      });
    } catch (error) {
      setClose(false);
      setStatus({
        ...status,
        success: false,
        error: true,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };

  const handleApproveClick = async (courseId) => {
    setOpenApproveModal(!openApproveModal);
    setCourseId(courseId);
  };

  const handleDeleteClick = (courseId) => {
    setOpenDeleteModal(!openDeleteModal);
    setCourseId(courseId);
  };

  const handleDelete = async (courseId) => {
    const { data } = await del({
      variables: {
        courseId: courseId,
      },
      refetchQueries: [GETCOURSE, "GET_COURSE"],
    });
    if (data) setOpenDeleteModal(false);
  };

  const thead = [
    { head: "Name" },
    { head: "Category" },
    { head: "Status" },
    { head: "Enrolled" },
    { head: "Publish Date" },
    { head: "Action" },
  ];

  const statusColorMap = {
    APPROVED: "green",
    REJECTED: "red",
    PENDING: "blue",
  };

  useEffect(() => {
    refetch();
  }, [data]);
  return (
    <>
      {status.success && (
        <Toast
          text={status.successContent ?? "Course Successfully Approved!"}
          isSuccess={true}
          close={close}
          setClose={setClose}
        />
      )}
      {status.error && (
        <Toast
          text={status.errorContent ?? "Something went wrong!"}
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
            title={approved ? "Approved Courses" : "Courses"}
            data={thead}
            noCrud={true}
            setPage={setPage}
            page={page}
            itemPerPage={itemPerPage}
            totalCount={totalCount?.course_aggregate?.count}
          >
            {data?.course?.map(
              (
                {
                  id,
                  name,
                  status,
                  category,
                  publish_date,
                  enrollments,
                  instructor,
                },
                index
              ) => {
                return (
                  <tr className="border p-1 hover:bg-gray-50/90" key={id}>
                    <TD>{index + 1}</TD>
                    <TD text={trimText(name, 30)}>
                      <span className="text-[0.6rem] text-gray-500 leading-none">
                        {instructor?.studentprofile?.length === 0
                          ? trimText(instructor?.email, 15)
                          : trimText(
                              instructor?.studentprofile?.first_name +
                                " " +
                                instructor?.studentprofile?.last_name,
                              15
                            )}
                      </span>
                    </TD>
                    <TD text={trimText(category?.name, 15)} />
                    <TD>
                      <span
                        className={`text-${statusColorMap[status]}-500 text-xs font-medium lowercase`}
                      >
                        {` ${status}`}
                      </span>
                    </TD>
                    <TD text={enrollments?.length} />
                    <TD>
                      <span className="text-xs">
                        {formattedDate(publish_date)}
                      </span>
                    </TD>
                    <TD>
                      <Link
                        className="relative group"
                        to={`/dashboard/courses-detail/${id}`}
                      >
                        <span className="invisible absolute -left-1 -top-1 text-xs whitespace-nowrap rounded shadow-lg py-2 px-3 bg-gray-900 text-white -mt-8 group-hover:visible z-10">
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
                    <td className="text-start flex gap-1 p-1">
                      <button
                        type="button"
                        className="bg-green-100/50 p-2 inline rounded relative group hover:bg-green-600"
                        onClick={() => handleApproveClick(id)}
                      >
                        <ToolTip text="Approve/Reject" />
                        <svg
                          className="w-3 h-3 fill-green-500 group-hover:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                      </button>
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
                    {openApproveModal && (
                      <ApproveModal
                        isOpen={openApproveModal}
                        courseId={courseId}
                        handleModal={() =>
                          setOpenApproveModal(!openApproveModal)
                        }
                        handleApprove={handleApprove}
                      />
                    )}
                    {openDeleteModal && (
                      <DeleteModal
                        isOpen={openDeleteModal}
                        courseId={courseId}
                        handleModal={() => setOpenDeleteModal(!openDeleteModal)}
                        handleDelete={handleDelete}
                      />
                    )}
                  </tr>
                );
              }
            )}
          </Table>
        </>
      )}
    </>
  );
};

export default CourseList;
