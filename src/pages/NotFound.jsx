import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen font-naifty">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-400 mb-4">404</h1>
        <p className="text-base">
          <strong>Oops!</strong> This page could not be found.
        </p>
        <Link
          to={navigate(-1)}
          className="bg-purple-600 px-4 py-2 rounded-lg my-6 text-white inline-block"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};
