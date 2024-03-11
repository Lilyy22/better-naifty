import React from "react";

export const CourseCardLoader = () => {
  return (
    <>
      <div className="bg-white shadow w-full md:w-80 rounded-lg flex-shrink-0 flex-grow-0 relative">
        <div className="rounded-t-lg w-full h-40 bg-gray-200"></div>
        {/* body */}
        <div className="p-4">
          <p className="bg-gray-300 w-1/4 py-1.5 mb-2 rounded-lg"></p>
          <p className="bg-gray-200 p-6 w-full py-1.5 mb-1 rounded-lg"></p>
          <p className="bg-gray-200 p-6 w-full py-1.5 mb-1 rounded-lg"></p>
          <p className="bg-gray-200 p-6 w-full py-1.5 mb-1 rounded-lg"></p>
          <p className="bg-gray-200 p-6 w-full py-1.5 mb-1 rounded-lg"></p>
        </div>
        {/* footer */}
        <div className="px-4 py-4 flex justify-between items-center border-t">
          {/* instructor profile */}
          <div className="flex gap-2">
            <div className="rounded-full w-9 h-9 bg-gray-200 m-auto"></div>
            <div className="my-auto">
              <span className="block w-24 bg-gray-300 p-1.5 rounded-lg mb-0.5"></span>
              <span className="block w-24 bg-gray-300 p-1.5 rounded-lg"></span>
            </div>
          </div>
          {/*END instructor profile */}
          {/* comment */}
          <div className="bg-slate-200 rounded-md p-3"></div>
        </div>
      </div>
    </>
  );
};
