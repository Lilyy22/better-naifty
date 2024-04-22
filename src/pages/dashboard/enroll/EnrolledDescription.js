import React, { useState } from "react";
import { CourseDetail } from "../course/CourseDetail";
import Breadcrumb from "../../../components/Breadcrumb";
import Forum from "../forum/Forum";
import Score from "../assessment/Score";

const EnrolledDescription = () => {
  const [openTab, setOpenTab] = useState(1);

  const breadcrumbs = [
    {
      name: "Enrolled",
      path: "/dashboard/enrolled-courses",
    },
    {
      name: "Detail",
      path: "",
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="rounded-lg bg-white">
        <div className="border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 pl-2">
            <li className="me-2 outline-none" role="presentation">
              <button
                className={`inline-block p-2 md:p-4 rounded-t-lg ${
                  openTab === 1 ? "text-blue-700 border-b border-blue-700" : ""
                }`}
                onClick={() => setOpenTab(1)}
              >
                Course
              </button>
            </li>
            <li className="me-2 outline-none" role="presentation">
              <button
                className={`inline-block p-2 md:p-4 rounded-t-lg ${
                  openTab === 2 ? "text-blue-700 border-b border-blue-700" : ""
                }`}
                onClick={() => setOpenTab(2)}
              >
                Assessment
              </button>
            </li>
            <li className="me-2 outline-none" role="presentation">
              <button
                className={`inline-block p-2 md:p-4 rounded-t-lg ${
                  openTab === 3 ? "text-blue-700 border-b border-blue-700" : ""
                }`}
                onClick={() => setOpenTab(3)}
              >
                Forum
              </button>
            </li>
          </ul>
        </div>

        <div
          className={`bg-custom-gray-400 pt-4 ${
            openTab === 1 ? "block" : "hidden"
          }`}
        >
          <CourseDetail />
        </div>

        <div
          className={`bg-custom-gray-400 pt-4 ${
            openTab === 2 ? "block" : "hidden"
          }`}
        >
          <Score />
        </div>
        <div
          className={`bg-custom-gray-400 pt-4 ${
            openTab === 3 ? "block" : "hidden"
          }`}
        >
          <Forum />
        </div>
        {/* END container */}
      </div>
    </>
  );
};

export default EnrolledDescription;
