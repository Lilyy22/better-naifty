import React from "react";

export const Profile = ({ photo, name, subText, loading }) => {
  return (
    <div className="px-2 py-3 flex justify-between items-center md:px-4">
      <div className="flex space-x-2">
        <div className="h-9 w-9">
          <img
            className={`rounded-full w-full h-full object-cover m-auto border ${
              loading ? "animate-pulse grayscale" : ""
            }`}
            src={photo}
            alt="short profile card"
          />
        </div>
        <div className="hidden md:block">
          <p className="block text-gray-600 leading-tighter mb-0 font-semibold text-sm">
            {name}
          </p>
          <p className="text-[11.5px] text-gray-400 tracking-loose leading-none">
            {subText}
          </p>
        </div>
      </div>
    </div>
  );
};
