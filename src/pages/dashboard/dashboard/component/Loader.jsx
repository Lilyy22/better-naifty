import React from "react";

export const DashCardLoader = () => {
  return (
    <div className="border border-gray-300 rounded-xl bg-gray-50 w-60 font-mont mb-4 flex-shrink-0 animate-pulse">
      <div className="p-6">
        <div className="inline-block p-4 rounded-lg mb-3 w-8 bg-gray-200"></div>
        <h1 className="w-44 py-4 bg-gray-200 rounded-lg mb-4"></h1>
        <p className="w-44 h-2 bg-gray-200 rounded-lg"></p>
      </div>
    </div>
  );
};
