export const DeleteModal = ({
  handleDelete,
  handleModal,
  isOpen,
  courseId,
  text,
  statusUser,
}) => {
  return (
    <>
      <div className={isOpen ? "" : "hidden"}>
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/20"
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
                <span className="sr-only">Close modal</span>
              </button>
              {text ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="text-gray-400 w-11 h-11 mb-3.5 mx-auto fill-green-800"
                >
                  <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
                </svg>
              ) : (
                <svg
                  className="text-gray-400 w-11 h-11 mb-3.5 mx-auto fill-red-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <p className="mb-4">
                {text ? text : "Are you sure you want to Delete this Item?"}
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={handleModal}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"
                >
                  No, cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(courseId, statusUser)}
                  className={`py-2 px-3 text-sm font-medium text-center text-whitefocus:ring-4 focus:outline-none ${
                    text
                      ? "bg-green-300/80 rounded-lg hover:bg-green-500  focus:ring-green-200"
                      : "bg-red-500/80 rounded-lg hover:bg-red-700  focus:ring-red-300"
                  }`}
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
