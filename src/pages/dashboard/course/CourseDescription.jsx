import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GETCOURSESECTION } from "./data/query";
import { CourseDetailLoader } from "./components/loader/DetailLoader";
import { formattedDate } from "../../../utils/formattedDate";
import { DashH4 } from "../../../components/Heading";
import { Profile } from "../../../components/Profile";
import { Rating } from "../../../components/Rating";
import Enroll from "../enroll/Enroll";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { isStudentEnrolled } from "../../../utils/isStudentEnrolled";
import { ToolTip } from "../../../components/ToolTip";
import SectionList from "../section/SectionList";
import { GoBack } from "../../../components/Button";
import RateCourse from "./RateCourse";

export const CourseDescription = () => {
  const { course_id } = useParams();
  // const { userId, isSuperUser } = useContext(AuthContext);
  // const admin = isSuperUser === "true" || isSuperUser === true;

  const { data, loading, refetch } = useQuery(GETCOURSESECTION, {
    variables: {
      courseId: course_id,
    },
  });
  // const [enrolled, setEnrolled] = useState(false);

  // useEffect(() => {
  //   refetch();
  // }, [enrolled]);

  return (
    <>
      {loading ? (
        <CourseDetailLoader />
      ) : (
        <div className="rounded-lg">
          <GoBack text="Back" pathname="/dashboard/course-list" />
          <DashH4 text={data?.course[0]?.name} />
          <div className="flex flex-wrap gap-4 justify-between">
            <div className="w-full lg:w-[45%] p-6 order-last flex-grow bg-white/60 rounded-lg mb-auto">
              <div className="flex justify-between">
                <h1 className="my-4 font-semibold text-base">
                  What you will learn
                </h1>
              </div>

              <SectionList courseId={course_id} />
            </div>
            <div className="w-full lg:w-[50%]">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover border rounded-t-lg"
                  src={`https://naifty.abelayalew.dev/media/${data?.course[0]?.thumbnail}`}
                  alt="Course Thumbnail"
                />
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <div className="">
                  <span className="bg-purple-100/80 rounded-xl px-4 py-1 text-sm mb-4 inline-block">
                    {data?.course[0]?.category?.name}
                  </span>
                  <div className="text-gray-500 leading-3 text-xs tracking-tight">
                    <span>46 Videos •</span> <span>80 hours •</span>{" "}
                    <span>{formattedDate(data?.course[0]?.updated_at)}</span>
                  </div>
                  <Rating />
                  <h2 className="font-bold">${data?.course[0]?.price}</h2>
                </div>
                <h1 className="my-6 font-semibold mb-1">Course Description</h1>
                <p className="text-gray-500 text-sm">
                  {data?.course[0]?.description}
                </p>
              </div>
            </div>
          </div>
          {/* END container */}
        </div>
      )}
    </>
  );
};
