import React, { useState } from "react";
import { usePagination } from "../hooks/usePagination";

const Pagination = ({ totalCount, fetchMore, pagination, setPagination }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationRange = usePagination({
    totalCount,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  // if (currentPage === 0 || paginationRange?.length < 2) {
  //   return null;
  // }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onNext = () => {
    setCurrentPage(currentPage + 1);
    setPagination({
      ...pagination,
      offset: pagination.offset + pagination.limit,
    });

    fetchMore({
      variables: {
        offset: pagination.offset + pagination.limit,
      },
    });
  };

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);

    if (pagination.offset > pagination.limit) {
      setPagination({
        ...pagination,
        offset: pagination.offset - pagination.limit,
      }); // Decrement the offset to go back to the previous page
    } else {
      setPagination({
        ...pagination,
        offset: 0,
      });
    }
  };

  let lastPage = paginationRange
    ? paginationRange[paginationRange?.length - 1]
    : 3;

  return (
    <nav role="navigation" aria-label="Pagination Navigation" className="my-4">
      {totalCount > pagination.limit && (
        <ul className="flex list-none items-center justify-between divide-x divide-slate-200 overflow-hidden rounded text-sm text-slate-700">
          <li className="bg-slate-50">
            <a
              onClick={currentPage === 1 ? () => {} : onPrevious}
              aria-label="Goto Page 1"
              className={`
                     inline-flex gap-2 cursor-pointer h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium transition duration-300 hover:bg-emerald-50 focus-visible:outline-none md:inline-flex 
                     ${
                       currentPage === 1
                         ? "text-gray-300 hover:bg-transparent"
                         : "text-slate-700 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-600"
                     }
                `}
            >
              <span className="order-2">Prev</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-mx-1 h-4 w-4"
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
            </a>
          </li>

          {paginationRange?.map((pageNumber) => {
            return (
              <li className="border border-slate-200 hidden" key={pageNumber}>
                <a
                  onClick={() => handlePageClick(pageNumber)}
                  aria-label="Goto Page 1"
                  className={`
                     hidden cursor-pointer h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus-visible:outline-none md:inline-flex 
                     ${
                       pageNumber === currentPage
                         ? "text-emerald-700 bg-emerald-50"
                         : ""
                     }
                `}
                >
                  {pageNumber}
                </a>
              </li>
            );
          })}
          <li className="border-none bg-slate-50">
            <a
              onClick={currentPage === lastPage ? () => {} : onNext}
              aria-label="Goto Page 4"
              className={`
                     inline-flex gap-2 cursor-pointer h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium transition duration-300 hover:bg-emerald-50 focus-visible:outline-none md:inline-flex 
                     ${
                       currentPage === lastPage
                         ? "text-gray-400 hover:bg-transparent"
                         : "text-slate-700 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-600"
                     }
                `}
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-mx-1 h-4 w-4"
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
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
