import React from "react";
import { DashH5 } from "../Heading";

export const DashForm = ({ title, children }) => {
  return (
    <>
      <div className="bg-white rounded-lg w-full xl:w-[70%] font-mont relative">
        <div className="border-b px-4 py-5 border-gray-100">
          <DashH5 text={title} />
        </div>
        {children}
      </div>
    </>
  );
};
