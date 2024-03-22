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
