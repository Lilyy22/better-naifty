import React, { useState } from "react";
import { PrimaryLink } from "../Link";

const OptionalModal = ({
  goto,
  btnText,
  data,
  isOpen,
  setIsOpen,
  heading,
  subText,
}) => {
  return (
    <div className={isOpen ? "" : "hidden"}>
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-800/30 "
      >
        <div className="relative p-6 w-full max-w-md h-full md:h-auto">
          <div className="bg-white shadow rounded-lg p-6 text-center max-w-sm">
            <h3 className="font-mont font-semibold text-sm text-purple-700">
              {heading}
            </h3>
            <p className="my-8 font-medium text-gray-500">{subText}</p>
            <div className="flex gap-2 justify-center">
              <PrimaryLink
                goto={goto}
                data={data}
                customStyle="w-full"
                text={btnText}
                handleClick={() => setIsOpen(!isOpen)}
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-gray-400 font-semibold text-xs hover:text-gray-600"
              >
                Maybe, Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalModal;