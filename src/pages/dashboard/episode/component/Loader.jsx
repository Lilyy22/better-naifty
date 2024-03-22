import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="w-full max-w-xs animate-pulse">
        <div className="bg-white mb-4 rounded-lg">
          <div className="md:h-44 bg-gray-400"></div>
          <div className="p-6">
            <p className="w-24 bg-gray-200 p-2 rounded mb-4"></p>
            <p className="w-full bg-gray-200 p-2 rounded mb-2"></p>
            <p className="w-full bg-gray-200 p-2 rounded mb-2"></p>
            <p className="w-full bg-gray-200 p-2 rounded mb-2"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export const DetailLoader = () => {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-between animate-pulse">
        <div className="w-full lg:flex-1">
          <div className="bg-white mb-4 rounded-lg">
            <div className="h-44 md:h-96 bg-gray-400"></div>
            <div className="p-6">
              <p className="w-24 bg-gray-200 p-2 rounded mb-4"></p>
              <p className="w-full bg-gray-200 p-2 rounded mb-2"></p>
              <p className="w-full bg-gray-200 p-2 rounded mb-2"></p>
              <p className="w-full bg-gray-200 p-2 rounded mb-2"></p>
            </div>
          </div>
          <div className="bg-white rounded-lg m-auto">
            <div className="p-6">
              <p className="w-24 bg-gray-200 p-3 rounded mb-4"></p>
              <p className="w-full bg-gray-200 p-12 rounded mb-2"></p>
              <p className="w-24 bg-gray-200 p-3 rounded mb-4"></p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg w-full lg:w-[35%] mb-auto">
          <div className="p-6">
            <p className="w-24 bg-gray-200 p-3 rounded mb-4"></p>
            <p className="w-full bg-gray-200 p-4 rounded mb-2"></p>
            <p className="w-full bg-gray-200 p-4 rounded mb-2"></p>
            <p className="w-full bg-gray-200 p-4 rounded mb-2"></p>
          </div>
        </div>
      </div>
    </>
  );
};
