import React, { useState } from "react";

export const ApproveModal = ({
  handleApprove,
  handleModal,
  isOpen,
  courseId,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    handleApprove(courseId, false);
    setIsLoading(true);
  };

  return (
    <>
      <div className={isOpen ? "" : "hidden"}>
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/10 "
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            {/* Modal content */}
            <div className="relative p-4 text-center bg-white rounded-lg sm:p-5">
              <button
                type="button"
                className="absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 rounded-lg p-1.5 ml-auto inline-flex items-center group"
                onClick={handleModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 fill-current group-hover:fill-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <svg
                className="fill-green-900 w-9 h-9 mb-3.5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" />
              </svg>
              <p className="mb-6 max-w-xs block mx-auto">
                Are you sure you want to Approve this Course?
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={handleClick}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-white bg-red-500/90 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 focus:z-10"
                >
                  {isLoading ? "•••" : "No, Reject"}
                </button>
                <button
                  type="button"
                  onClick={() => handleApprove(courseId, true)}
                  className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600/80 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
                >
                  Yes, Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
