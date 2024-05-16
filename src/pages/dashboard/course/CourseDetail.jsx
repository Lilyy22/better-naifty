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
import { trimText } from "../../../utils/trimText";

export const CourseDetail = () => {
  const { course_id } = useParams();
  const { userId, isSuperUser } = useContext(AuthContext);
  const admin = isSuperUser === "true" || isSuperUser === true;

  const { data, loading, refetch } = useQuery(GETCOURSESECTION, {
    variables: {
      courseId: course_id,
    },
  });
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    refetch();
  }, [enrolled]);

  return (
    <>
      {loading ? (
        <CourseDetailLoader />
      ) : (
        <div className="rounded-lg">
          <RateCourse
            courseId={course_id}
            enrolled={isStudentEnrolled(
              data?.course[0]?.enrollments,
              userId,
              admin
            )}
          />
          {admin && <GoBack text="Back" pathname="/dashboard/all-courses" />}
          <div className="flex flex-wrap gap-4 justify-between">
            <div className="w-full lg:w-[45%] p-6 order-last flex-grow bg-white/60 rounded-lg mb-auto">
              <div className="flex flex-wrap justify-between">
                <div>
                  <div className="text-gray-500 leading-3 text-xs tracking-tight">
                    <span>46 Videos •</span> <span>80 hours •</span>{" "}
                    <span>{formattedDate(data?.course[0]?.updated_at)}</span>
                  </div>
                  <Rating />
                  <h2 className="font-bold">${data?.course[0]?.price}</h2>
                </div>
                {isStudentEnrolled(
                  data?.course[0]?.enrollments,
                  userId,
                  admin
                ) ? (
                  <div className="flex gap-1 text-emerald-700 mb-auto bg-emerald-100/50 rounded-3xl font-mont px-4 py-1.5">
                    <svg
                      className="w-4 h-4 fill-current my-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                    <span className="font-mediumbold text-sm">Enrolled</span>
                  </div>
                ) : (
                  <Enroll
                    courseId={course_id}
                    studentId={userId}
                    enrolled={isStudentEnrolled(
                      data?.course[0]?.enrollments,
                      userId,
                      admin
                    )}
                    setEnrolled={setEnrolled}
                  />
                )}
              </div>
              <h1 className="my-6 font-semibold mb-1">Course Description</h1>
              <p className="text-gray-500 text-sm">
                {data?.course[0]?.description}
              </p>
              <div className="border-t my-8 py-4">
                <h1 className="font-semibold mb-1">Created by</h1>
                <Profile
                  name={`${data?.course[0]?.instructor?.studentprofile?.first_name} ${data?.course[0]?.instructor?.studentprofile?.last_name}`}
                  photo={
                    data?.course[0]?.instructor?.studentprofile?.profile_picture
                      ? `https://api.naifty.academy/media/${data?.course[0]?.instructor?.studentprofile?.profile_picture}`
                      : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                  }
                  subText={
                    data?.course[0]?.instructor?.studentprofile?.user?.email
                  }
                />
                <div className="pl-2 md:pl-4">
                  <h1 className="mb-1 font-semibold text-gray-600 text-xs">
                    About Instructor
                  </h1>
                  <p className="text-gray-500 text-xs">
                    {trimText(
                      data?.course[0]?.instructor?.studentprofile?.bio,
                      300
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] bg-white rounded-lg">
              <div className="p-4">
                <span className="bg-purple-100/80 rounded-xl px-4 py-1 text-sm mb-4 inline-block">
                  {data?.course[0]?.category?.name}
                </span>
                <DashH4 text={data?.course[0]?.name} />
              </div>
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover border "
                  src={`https://api.naifty.academy/media/${data?.course[0]?.thumbnail}`}
                  alt="Course Thumbnail"
                />
              </div>
              <div className="p-6">
                <div>
                  <div className="flex justify-between">
                    <h1 className="my-4 font-semibold text-base">
                      What you will learn
                    </h1>
                    {!isStudentEnrolled(
                      data?.course[0]?.enrollments,
                      userId,
                      admin
                    ) && (
                      <div className="bg-purple-100/50 my-auto p-2 text-purple-700 rounded relative group">
                        <ToolTip text="Enroll to Unlock course" />
                        <svg
                          className="w-3 h-3 fill-current my-auto float-right inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <SectionList
                    courseId={course_id}
                    enrolled={isStudentEnrolled(
                      data?.course[0]?.enrollments,
                      userId,
                      admin
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* END container */}
        </div>
      )}
    </>
  );
};
