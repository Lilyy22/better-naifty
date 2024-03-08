import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GETCOURSESECTION } from "./data/query";
import { CourseDetailLoader } from "./components/loader/DetailLoader";
import { formattedDate } from "../../../utils/formattedDate";

export const CourseDetail = () => {
  const { course_url } = useParams();
  const { data, loading } = useQuery(GETCOURSESECTION, {
    variables: {
      courseId: course_url,
    },
  });
  return (
    <>
      {loading ? (
        <CourseDetailLoader />
      ) : (
        <div className="my-8 rounded-lg">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-[39%] px-2 py-6 lg:p-6 order-last">
              <div className="flex flex-wrap justify-between">
                <div>
                  <h1 className="text-base font-bold mb-1 font-mont">
                    {data?.course[0]?.name}
                  </h1>
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
              {/* END header */}
              <h1 className="my-6 font-semibold mb-1">Course Description</h1>
              <p>{data?.course[0]?.description}</p>
              <div className="border-t my-8 py-4">Created by Autor</div>
            </div>
            {/*END description card */}
            <div className="w-full lg:w-[60%]">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src="https://static-cse.canva.com/blob/1358486/1600w-wK95f3XNRaM.jpg"
                  alt="Course Thumbnail"
                />
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <div className="bg-white rounded-b-lg">
                  <h1 className="my-4 font-semibold text-lg">
                    What you will learn
                  </h1>
                  <ol className="list-decimal list-outside">
                    {data?.course[0]?.sections?.map(
                      ({ title, id, episodes }) => {
                        return (
                          <CourseSectionList
                            key={id}
                            section={title}
                            episodes={episodes}
                          />
                        );
                      }
                    )}
                  </ol>
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
