import React from "react";
import { Link } from "react-router-dom";

export const PrimaryLink = ({ text, children, goto }) => {
  return (
    <>
      <Link
        to={goto}
        className={`bg-purple-500 rounded text-white font-medium outline-none
        py-1 transition-all px-4 my-auto text-xs hover:bg-purple-700`}
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
