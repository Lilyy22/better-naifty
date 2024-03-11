import React, { useEffect, useState } from "react";

export const Toast = ({ isSuccess, text }) => {
  const [close, setClose] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setClose(true);
    }, 6000);
  }, []);

  return (
    <>
      {/* Toast */}
      {!close && (
        <div
          className={`max-w-xs border text-sm text-teal-800 rounded-lg fixed top-6 right-6 z-50  ${
            isSuccess
              ? "bg-teal-100 border-teal-200 text-teal-800"
              : "bg-red-100 border-red-200 text-red-800"
          }`}
          role="alert"
        >
          <div className="flex p-4">
            {text}
            <div className="ms-auto">
              <button
                type="button"
                onClick={() => setClose(!close)}
                className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-teal-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <div
        className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg"
        role="alert"
      >
        <div className="flex p-4">
          <div className="flex-shrink-0">
            <svg
              className="flex-shrink-0 size-4 text-teal-500 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
          <div className="ms-3">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              This is a success message.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};
