import React from "react";
import { formattedDate } from "../../../../utils/formattedDate";
import { Link } from "react-router-dom";

export const Card = ({ title, profile, name, date, courseId, id }) => {
  return (
    <Link
      to={`/dashboard/enrolled-courses/course/${courseId}/forum/${id}`}
      className="my-4 p-4 border rounded-md flex justify-between hover:bg-gray-50"
    >
      <div className="flex gap-2">
        <div className="w-8 h-8 text-white rounded-full border">
          <img
            src={`https://api.naifty.academy/media/${profile}`}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-medium leading-none">{title}</h1>
          <p className="text-xs leading-6 tracking-wide text-gray-400">
            {name} asked on {formattedDate(date)}
          </p>
        </div>
      </div>
      <div className="my-auto flex gap-1 text-gray-500">
        <svg
          className="w-3 h-3 fill-current my-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
        </svg>
        <span className="text-sm">12</span>
      </div>
    </Link>
  );
};
