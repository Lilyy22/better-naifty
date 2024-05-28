import React from "react";
import { DashH5 } from "../Heading";
import { PrimaryLink } from "../Link";
import { ToolTip } from "../ToolTip";

export const Table = ({
  title,
  children,
  path,
  data,
  noCrud,
  setPage,
  page,
  itemPerPage,
  totalCount,
}) => {
  const lastPage = Math.ceil(totalCount / itemPerPage) - 1;

  return (
    <>
      <div className="bg-white rounded-lg min-w-5xl xl:w-[80%] font-mont">
        <div className="flex justify-between pr-4">
          <div className="border-b px-4 py-5 border-gray-100">
            <DashH5 text={title} />
          </div>
          {!noCrud && (
            <PrimaryLink text="Create" goto={path}>
              <svg
                className="w-2.5 h-2.5 fill-current leading-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </PrimaryLink>
          )}
        </div>
        {/* table */}
        <div className="p-4">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="mb-0 rounded-lg text-start border w-full">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-start text-sm p-4 font-semibold leading-3 border border-gray-100"
                  >
                    #
                  </th>
                  {data?.map(({ head }, index) => {
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="text-start text-sm p-4 font-semibold leading-3 border border-gray-100 whitespace-nowrap"
                      >
                        {head}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
          <div className="ml-auto pt-4">
            {/* pagination */}
            {itemPerPage < totalCount && (
              <div className="flex justify-between text-xs">
                <button
                  onClick={() => setPage((prev) => prev - 1)}
                  className={`rounded px-3 py-1 flex items-center gap-2 border ${
                    !page ? "bg-gray-200 text-gray-400" : "bg-purple-100"
                  }`}
                  disabled={!page}
                >
                  <span className="order-2">Prev</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mx-1 h-3 w-3 fill-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    role="graphics-symbol"
                    aria-labelledby="title-35 desc-35"
                  >
                    <title id="title-35">Previous page</title>
                    <desc id="desc-35">link to previous page</desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className={`rounded px-3 py-1 flex items-center gap-2 border ${
                    page === lastPage
                      ? "bg-gray-200 text-gray-400"
                      : "bg-purple-100"
                  }`}
                  disabled={page === lastPage}
                >
                  <span>Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mx-1 h-3 w-3 fill-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    role="graphics-symbol"
                    aria-labelledby="title-36 desc-36"
                  >
                    <title id="title-36">Next page</title>
                    <desc id="desc-36">link to next page</desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const TD = ({ text, children }) => {
  return (
    <td className="text-start text-sm px-4 py-1.5 border border-gray-100 whitespace-nowrap">
      {children}
      <p>{text}</p>
    </td>
  );
};

export const Action = ({
  handleDeleteClick,
  handleEditClick,
  children,
  isApproved,
  id,
}) => {
  return (
    <>
      <div className="flex gap-2 px-4 py-2">
        <td className="text-start flex gap-1">
          <button
            type="button"
            className="bg-green-100/50 p-2 inline rounded relative group hover:bg-green-600"
            onClick={() => handleEditClick(id)}
          >
            <ToolTip text="Edit" />
            <svg
              className="w-3 h-3 fill-green-500 group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
            </svg>
          </button>
          {!isApproved && (
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
          )}
        </td>
        {children}
      </div>
    </>
  );
};
