import React from "react";
import { Link } from "react-router-dom";

export const PrimaryLink = ({ text, children, goto }) => {
  return (
    <>
      <Link
        to={goto}
        className={`bg-purple-500 rounded-lg text-white font-medium 
        py-1 transition-all border-2 border-custom-purple-700
        hover:bg-purple-700 hover:text-white px-4`}
      >
        <div className="flex gap-2 justify-center">
          <p className="my-auto">
            {children} {/* SVG icon */}
          </p>
          <p>{text}</p>
        </div>
      </Link>
    </>
  );
};
