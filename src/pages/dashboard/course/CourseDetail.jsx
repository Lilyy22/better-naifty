import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { GETCOURSESECTION } from "./data/query";
import { CourseDetailLoader } from "./components/loader/DetailLoader";
import { formattedDate } from "../../../utils/formattedDate";
import { PrimaryButton } from "../../../components/Button";
import { DashH4 } from "../../../components/Heading";
import { Profile } from "../../../components/Profile";
import { SectionDropDown } from "../section/component/List";
import { Rating } from "../../../components/Rating";

export const CourseDetail = () => {
  const { state } = useLocation();
  const { data, loading } = useQuery(GETCOURSESECTION, {
    variables: {
      courseId: state?.courseId,
    },
  });
  return (
    <>
      {loading ? (
        <CourseDetailLoader />
      ) : (
        <div className="rounded-lg">
          <DashH4 text={data?.course[0]?.name} />
          <div className="flex flex-wrap gap-4 justify-between">
            <div className="w-full lg:w-[45%] p-6 order-last flex-grow bg-white/60 rounded-lg mb-auto">
              <div className="flex flex-wrap justify-between">
                <div>
                  <div className="text-gray-500 leading-3 text-xs tracking-tight">
                    <span>46 Videos •</span> <span>80 hours •</span>{" "}
                    <span>{formattedDate(data?.course[0]?.updated_at)}</span>
                  </div>
                  <Rating />
                </div>
                <div className="h-auto">
                  <PrimaryButton text="Enroll Now" />
                </div>
              </div>
              <h1 className="my-6 font-semibold mb-1">Course Description</h1>
              <p className="text-gray-500 text-sm">
                {data?.course[0]?.description}
              </p>
              <div className="border-t my-8 py-4">
                <h1 className="font-semibold mb-1">Created by</h1>
                <Profile
                  name={`${data?.course[0]?.instructor.studentprofile.first_name} ${data?.course[0]?.instructor.studentprofile.last_name}`}
                  photo={`https://naifty.abelayalew.dev/media/${data?.course[0]?.instructor.studentprofile.profile_picture}`}
                  subText={
                    data?.course[0]?.instructor.studentprofile.user.email
                  }
                />
                <div className="pl-2 md:pl-4">
                  <h1 className="mb-1 font-semibold text-gray-600 text-xs">
                    About Author
                  </h1>
                  <p className="text-gray-500 text-xs">
                    {data?.course[0]?.instructor.studentprofile.bio}
                  </p>
                </div>
              </div>
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
                <div className="bg-white rounded-b-lg">
                  <h1 className="my-4 font-semibold text-base">
                    What you will learn
                  </h1>
                  <ul>
                    {data?.course[0]?.sections?.map(
                      ({ title, id, episodes }) => {
                        return (
                          <SectionDropDown
                            key={id}
                            section={title}
                            episodes={episodes}
                          />
                        );
                      }
                    )}
                  </ul>
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
