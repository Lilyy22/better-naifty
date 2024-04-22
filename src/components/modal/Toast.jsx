import React from "react";

const ToastModal = ({ heading, subText, isOpen, setOpen }) => {
  return (
    <div className={isOpen ? "" : "hidden"}>
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-800/30"
      >
        <div className="relative p-6 w-full max-w-md h-full md:h-auto bg-white rounded-lg">
          <button
            type="button"
            className="absolute top-2.5 right-2.5 bg-transparent p-1.5 ml-auto inline-flex items-center group"
            onClick={() => setOpen(!isOpen)}
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
          <div className="p-6 text-center max-w-sm">
            <h3 className="font-mont font-semibold text-sm text-purple-700">
              {heading}
            </h3>
            <p className="my-8 font-medium text-gray-500">{subText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastModal;
