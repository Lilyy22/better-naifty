import React, { useState } from "react";
import { Action, TD, Table } from "../../../components/table/Table";
import { TableLoader } from "../../../components/Loader";
import { useMutation, useQuery } from "@apollo/client";
import { GETCOURSE } from "./data/query";
import { formattedDate } from "../../../utils/formattedDate";
import { ApproveModal } from "../../../components/modal/Approve";
import { APPROVECOURSE } from "./data/mutation";
import { ToolTip } from "../../../components/ToolTip";
import { Toast } from "../../../components/Toast";

const CourseList = () => {
  const [openApproveModal, setOpenApproveModal] = useState(false);
  const [courseId, setCourseId] = useState(false);

  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [approveCourse] = useMutation(APPROVECOURSE);
  const { data, loading, fetchMore } = useQuery(GETCOURSE, {
    variables: {
      offset: 0,
      limit: 5,
    },
  });

  const handleApprove = async (courseId, status) => {
    try {
      await approveCourse({
        variables: {
          courseId: courseId,
          status: status,
        },
        refetchQueries: [GETCOURSE, "GET_COURSE"],
      });
      setOpenApproveModal(false);
      setClose(false);
      setStatus({
        ...status,
        success: true,
      });
    } catch (error) {
      setClose(false);
      setStatus({
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

  const thead = [
    { head: "Name" },
    { head: "Role" },
    { head: "Status" },
    { head: "Publish Date" },
    { head: "Action" },
  ];
  return (
    <>
      {status.success && (
        <Toast
          text="Course Successfully Approved!"
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
          <Table title="Course" data={thead}>
            {data?.course?.map(
              (
                { id, name, status, category, publish_date },
                index
              ) => {
                return (
                  <>
                    <tr className="border p-1" key={id}>
                      <TD>{index + 1}</TD>
                      <TD text={name} />
                      <TD text={category?.name} />
                      <TD>
                        {status ? (
                          <span className="text-green-500 text-xs">
                            {`○ ${status}`}
                          </span>
                        ) : (
                          <span className="text-red-500 text-xs">
                            {`○ ${status}`}
                          </span>
                        )}
                      </TD>
                      <TD text={formattedDate(publish_date)} />
                      <button
                        type="button"
                        className="bg-red-100/50 p-2 inline rounded relative group hover:bg-red-600"
                        onClick={() => handleApproveClick(id)}
                      >
                        <ToolTip text="Approve/Reject" />
                        <svg
                          className="w-3 h-3 fill-red-500 group-hover:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                        </svg>
                      </button>
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
                    </tr>
                  </>
                );
              }
            )}
          </Table>
          <nav className="float-right" aria-label="Page navigation">
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
          </nav>
        </>
      )}
    </>
  );
};

export default CourseList;
