import React from "react";

export const CardLoader = () => {
  return (
    <div className="w-48 h-44 rounded-lg overflow-hidden relative bg-gray-300 animate-pulse">
      <div className="rounded-lg w-full h-full object-cover m-auto bg-gray-600"></div>
      <h1 className="absolute bottom-3 left-3 w-12 bg-gray-100"></h1>
    </div>
  );
};
