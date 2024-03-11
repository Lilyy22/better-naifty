import { Link } from "react-router-dom";
import { Profile } from "../../../../components/Profile";
import { formattedDate } from "../../../../utils/formattedDate";

export const CourseCard = ({
  id,
  title,
  description,
  thumbnail,
  instructorName,
  instructorPhoto,
  updated_at,
}) => {
  return (
    <>
      <Link
        to={`/dashboard/courses/${id}`}
        className="bg-white shadow w-full md:w-80 rounded-lg flex-shrink-0 flex-grow-0 relative"
      >
        <div className="rounded-t-lg w-full h-40">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={
              thumbnail
                ? `https://naifty.abelayalew.dev/media/${thumbnail}`
                : "https://web.stlucie.k12.fl.us/wp-content/plugins/academy/assets//images/thumbnail-placeholder.png"
            }
            alt="course thumbnail"
          />
        </div>
        <div className="p-4">
          <h5 className="font-bold text-gray-700 text-sm">{title}</h5>
          <p className="text-gray-400 text-sm">
            {description?.substring(0, 120)}
            {description?.length > 120 ? "..." : ""}
          </p>
        </div>
        {/* footer */}
        <div className="flex justify-between items-center border-t pr-4 border-gray-100">
          <Profile
            name={instructorName}
            subText={formattedDate(updated_at)}
            photo={`https://naifty.abelayalew.dev/media/${instructorPhoto}`}
          />

          {/* comment */}
          <div className="bg-slate-100 rounded-md p-2 hover:bg-purple-500 group">
            <svg
              className="fill-purple-600 w-3 h-3 group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
            </svg>
          </div>
        </div>
        {/* end footer */}
      </Link>
    </>
  );
};
