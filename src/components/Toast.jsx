import React, { useEffect } from "react";

export const Toast = ({ isSuccess, text, close, setClose }) => {
  useEffect(() => {
    setTimeout(() => {
      setClose(true);
    }, 4000);
  }, [close]);

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
    </>
  );
};

export const TopToast = ({ isSuccess, text, close, setClose }) => {
  useEffect(() => {
    setTimeout(() => {
      setClose(true);
    }, 4000);
  }, [close]);

  return (
    <>
      {!close && (
        <div
          className={`fixed top-0 left-0 w-full text-center py-1 z-50 ${
            isSuccess ? "bg-teal-100 text-teal-900" : "bg-red-100 text-red-900"
          }`}
        >
          {text}
        </div>
      )}
    </>
  );
};
