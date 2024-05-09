import { Link } from "react-router-dom";
import { Profile } from "../../../../components/Profile";
import { formattedDate } from "../../../../utils/formattedDate";
import { ToolTip } from "../../../../components/ToolTip";

export const CourseCard = ({
  id,
  title,
  description,
  thumbnail,
  instructorName,
  instructorPhoto,
  updated_at,
  category,
  enrolled,
  enrolledCard,
}) => {
  return (
    <>
      <Link
        to={
          enrolledCard
            ? `/dashboard/enrolled-courses/course/${id}`
            : `/dashboard/courses-detail/${id}`
        }
        className="bg-white shadow w-full md:w-80 rounded-lg flex-shrink-0 flex-grow-0 relative"
      >
        <div className="relative flex flex-col h-full">
          <div className="rounded-t-lg w-full h-40 border-b">
            <img
              className="w-full h-full object-cover rounded-t-lg"
              src={
                thumbnail
                  ? `https://api.naifty.academy/media/${thumbnail}`
                  : "https://web.stlucie.k12.fl.us/wp-content/plugins/academy/assets//images/thumbnail-placeholder.png"
              }
              alt="course thumbnail"
            />
          </div>
          <div className="px-4 py-2">
            <span className="bg-purple-100/70 border rounded-xl text-xs px-4 py-1 mb-1 inline-block leading-none font-mont font-medium">
              {category?.name}
            </span>
            <h5 className="font-bold text-gray-700 text-sm">{title}</h5>
            <p className="text-gray-400 text-sm">
              {description?.substring(0, 120)}
              {description?.length > 120 ? "..." : ""}
            </p>
          </div>
          {/* footer */}
          <div className="mt-auto">
            <div className="flex justify-between items-center border-t pr-4 border-gray-100">
              <Profile
                name={instructorName}
                subText={formattedDate(updated_at)}
                photo={`https://api.naifty.academy/media/${instructorPhoto}`}
              />
              {/* end footer */}
              {!enrolled ? (
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
              ) : (
                <div className="bg-green-100/50 my-auto p-2 text-green-700 rounded relative group">
                  <ToolTip text="Course Enrolled" />
                  <svg
                    className="w-4 h-4 fill-current my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
