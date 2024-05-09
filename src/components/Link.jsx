import React from "react";
import { Link } from "react-router-dom";

export const PrimaryLink = ({
  text,
  children,
  goto,
  customStyle,
  handleClick,
  data,
}) => {
  return (
    <>
      <Link
        to={goto}
        state={data}
        onClick={handleClick}
        className={`bg-purple-500 rounded-md text-white font-medium outline-none
        py-2 transition-all px-4 text-sm hover:bg-purple-700 inline-block my-auto whitespace-nowrap ${customStyle}`}
      >
        <div className="flex gap-2 justify-center">
          <p>{text}</p>
          <p className="my-auto">
            {children} {/* SVG icon */}
          </p>
        </div>
      </Link>
    </>
  );
};

export const SecondaryLink = ({ text, children, goto, customStyle }) => {
  return (
    <>
      <Link
        to={goto}
        className={`bg-gray-200 px-3 py-2 font-medium rounded gap-2 mb-auto text-sm inline-block ${customStyle}`}
      >
        <div className="flex gap-2">
          <p>{text}</p>
          <p className="my-auto">
            {children} {/* SVG icon */}
          </p>
        </div>
      </Link>
    </>
  );
};
