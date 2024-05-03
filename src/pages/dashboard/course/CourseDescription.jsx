import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GETCOURSESECTION } from "./data/query";
import { CourseDetailLoader } from "./components/loader/DetailLoader";
import { formattedDate } from "../../../utils/formattedDate";
import { DashH4 } from "../../../components/Heading";
import { Rating } from "../../../components/Rating";
import { useState } from "react";
import { SectionTable } from "../section/SectionTable";
import { EnrolledStudent } from "../enroll/EnrolledStudent";
import List from "../assessment/List";
import Breadcrumb from "../../../components/Breadcrumb";
import Forum from "../forum/Forum";

export const CourseDescription = () => {
  const { course_id } = useParams();
  const [openTab, setOpenTab] = useState(1);
  const breadcrumbs = [
    {
      name: "Course",
      path: "/dashboard/course-list",
    },
    {
      name: "Detail",
      path: "",
    },
  ];

  const { data, loading } = useQuery(GETCOURSESECTION, {
    variables: {
      courseId: course_id,
    },
  });

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      {loading ? (
        <CourseDetailLoader />
      ) : (
        <div className="rounded-lg bg-white">
          <div className="border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 pl-2">
              <li className="me-2 outline-none" role="presentation">
                <button
                  className={`inline-block p-2 md:p-4 rounded-t-lg ${
                    openTab === 1
                      ? "text-blue-700 border-b border-blue-700"
                      : ""
                  }`}
                  onClick={() => setOpenTab(1)}
                >
                  Course
                </button>
              </li>
              <li className="me-2 outline-none" role="presentation">
                <button
                  className={`inline-block p-2 md:p-4 rounded-t-lg ${
                    openTab === 2
                      ? "text-blue-700 border-b border-blue-700"
                      : ""
                  }`}
                  onClick={() => setOpenTab(2)}
                >
                  Section
                </button>
              </li>
              <li className="me-2 outline-none" role="presentation">
                <button
                  className={`inline-block p-2 md:p-4 rounded-t-lg ${
                    openTab === 3
                      ? "text-blue-700 border-b border-blue-700"
                      : ""
                  }`}
                  onClick={() => setOpenTab(3)}
                >
                  Assessment
                </button>
              </li>
              <li className="me-2 outline-none" role="presentation">
                <button
                  className={`inline-block p-2 md:p-4 rounded-t-lg ${
                    openTab === 4
                      ? "text-blue-700 border-b border-blue-700"
                      : ""
                  }`}
                  onClick={() => setOpenTab(4)}
                >
                  Students
                </button>
              </li>
              <li className="me-2 outline-none" role="presentation">
                <button
                  className={`inline-block p-2 md:p-4 rounded-t-lg ${
                    openTab === 5
                      ? "text-blue-700 border-b border-blue-700"
                      : ""
                  }`}
                  onClick={() => setOpenTab(5)}
                >
                  Discussion
                </button>
              </li>
            </ul>
          </div>

          <div
            className={`flex flex-wrap gap-4 justify-between p-4 mt-4 ${
              openTab === 1 ? "flex" : "hidden"
            }`}
          >
            <div className="w-full lg:w-[45%]  order-last flex-grow bg-white/60 rounded-lg mb-auto">
              <h1 className="font-semibold mb-1">Course Description</h1>
              <p className="text-gray-500 text-sm">
                {data?.course[0]?.description}
              </p>
            </div>
            <div className="w-full lg:w-[50%]">
              <div className="px-4 py-2 bg-white rounded-b-lg">
                <div>
                  <span className="bg-purple-100/70 rounded-xl px-4 py-1 text-xs mb-2 inline-block">
                    {data?.course[0]?.category?.name}
                  </span>
                  <DashH4 text={data?.course[0]?.name} />
                  <div className="text-gray-500 leading-3 text-xs tracking-tight">
                    <span>46 Videos •</span> <span>80 hours •</span>{" "}
                    <span>{formattedDate(data?.course[0]?.updated_at)}</span>
                  </div>
                  <Rating />
                  <h2 className="font-bold">${data?.course[0]?.price}</h2>
                </div>
              </div>
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover border rounded-lg"
                  src={`https://api.naifty.academy/media/${data?.course[0]?.thumbnail}`}
                  alt="Course Thumbnail"
                />
              </div>
            </div>
          </div>

          <div className={`pt-4 md:p-2 ${openTab === 2 ? "block" : "hidden"}`}>
            <SectionTable courseId={course_id} setOpenTab={setOpenTab} />
          </div>

          <div className={`pt-4 md:p-2 ${openTab === 3 ? "block" : "hidden"}`}>
            <List courseId={course_id} />
          </div>

          <div
            className={`flex flex-wrap gap-4 justify-between p-4 ${
              openTab === 4 ? "flex" : "hidden"
            }`}
          >
            <EnrolledStudent
              enrollment={data?.course[0]?.enrollments}
              loading={loading}
            />
          </div>
          <div className={`${openTab === 5 ? "block" : "hidden"}`}>
            <Forum />
          </div>
          {/* END container */}
        </div>
      )}
    </>
  );
};
