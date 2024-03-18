import React from "react";
import { DashH4 } from "../../../../components/Heading";
import { trimText } from "../../../../utils/trimText";

export const DashboardCard = ({ total, icon, label, iconBg }) => {
  return (
    <div className="border border-gray-300 rounded-xl bg-gray-50 w-60 font-mont mb-4 flex-shrink-0 xl:w-1/4 xl:flex-shrink">
      <div className="p-6">
        <div className={`bg-${iconBg}-100 inline-block p-2 rounded-lg mb-3`}>
          {icon}
        </div>
        <h1 className="font-bold text-2xl tracking-wider">{total}</h1>
        <span className="text-sm tracking-tight whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
};

export const DashboardProgressCard = ({ total, icon, label, title }) => {
  return (
    <div className="rounded-xl bg-gray-50 w-full font-mont mb-4">
      <div className="p-4 lg:p-6">
        <DashH4 text={title ? title : "Popular Courses"} />
        {/* courses */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 lg:gap-6 justify-between mb-4 mt-6">
          {/* text */}
          <div className="flex justify-start my-auto">
            <div className="bg-green-100 inline-block p-1 rounded my-auto">
              <svg
                className="w-3 h-3 fill-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z" />
              </svg>
            </div>
            <p className="ml-2 whitespace-nowrap text-sm tracking-tight my-auto">
              Lorem ipsum dolor sit
            </p>
          </div>
          {/* end text */}
          {/* progress bar */}
          <div className="w-full flex gap-2 my-auto md:flex-1">
            <p className="inline-block text-xs">0%</p>
            <div className="bg-gray-200 rounded-full w-full my-auto h-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full "
                style={{ width: 0 }}
              ></div>
            </div>
          </div>
          {/* end progress bar */}
        </div>
        {/*  */}
        {/* courses */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 lg:gap-6 justify-between mb-4">
          {/* text */}
          <div className="flex justify-start my-auto">
            <div className="bg-purple-100 inline-block p-1 rounded my-auto">
              <svg
                className="w-3 h-3 fill-purple-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z" />
              </svg>
            </div>
            <p className="ml-2 whitespace-nowrap text-sm tracking-tight my-auto">
              Lorem ipsum dolor sit
            </p>
          </div>
          {/* end text */}
          {/* progress bar */}
          <div className="w-full flex gap-2 my-auto md:flex-1">
            <p className="inline-block text-xs">0%</p>
            <div className="bg-gray-200 rounded-full w-full my-auto h-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full "
                style={{ width: 0 }}
              ></div>
            </div>
          </div>
          {/* end progress bar */}
        </div>
        {/*  */}
        {/* courses */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 lg:gap-6 justify-between mb-4">
          {/* text */}
          <div className="flex justify-start my-auto">
            <div className="bg-amber-100 inline-block p-1 rounded my-auto">
              <svg
                className="w-3 h-3 fill-amber-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z" />
              </svg>
            </div>
            <p className="ml-2 whitespace-nowrap text-sm tracking-tight my-auto">
              Lorem ipsum dolor sit
            </p>
          </div>
          {/* end text */}
          {/* progress bar */}
          <div className="w-full flex gap-2 my-auto md:flex-1">
            <p className="inline-block text-xs">0%</p>
            <div className="bg-gray-200 rounded-full w-full my-auto h-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full "
                style={{ width: 0 }}
              ></div>
            </div>
          </div>
          {/* end progress bar */}
        </div>
        {/*  */}
        {/* courses */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 lg:gap-6 justify-between mb-4">
          {/* text */}
          <div className="flex justify-start my-auto">
            <div className="bg-blue-100 inline-block p-1 rounded my-auto">
              <svg
                className="w-3 h-3 fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z" />
              </svg>
            </div>
            <p className="ml-2 whitespace-nowrap text-sm tracking-tight my-auto">
              Lorem ipsum dolor sit
            </p>
          </div>
          {/* end text */}
          {/* progress bar */}
          <div className="w-full flex gap-2 my-auto md:flex-1">
            <p className="inline-block text-xs">0%</p>
            <div className="bg-gray-200 rounded-full w-full my-auto h-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full "
                style={{ width: 0 }}
              ></div>
            </div>
          </div>
          {/* end progress bar */}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export const DashboardCourseProgressCard = ({
  course,
  description,
  bgColor,
}) => {
  return (
    <div
      className={`rounded-xl bg-blue-50/80 border border-gray-300 w-64 font-mont mb-4 flex-shrink-0 xl:w-1/3 xl:flex-shrink`}
    >
      <div className="p-6">
        {/* text */}
        <div className="my-auto">
          <h1 className="font-bold">{course}</h1>
          <p className="text-xs tracking-tight my-auto">
            {trimText(description, 60)}
          </p>
        </div>
        {/* end text */}
        {/* progress bar */}
        <div className="w-full mt-6">
          <p className="inline-block text-xs">0/0</p>
          <div className="bg-gray-200 rounded-full w-full my-auto h-1.5">
            <div
              className="bg-blue-600 h-1.5 rounded-full "
              style={{ width: 0 }}
            ></div>
          </div>
        </div>
        {/* end progress bar */}
      </div>
    </div>
  );
};
