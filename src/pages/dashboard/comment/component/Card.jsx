import { Profile } from "../../../../components/Profile";
import { formattedDate } from "../../../../utils/formattedDate";

export const CommentCard = ({ photo, name, comment, updated_at }) => {
  return (
    <>
      <div className="bg-white p-6">
        <Profile
          photo={`https://naifty.abelayalew.dev/media/${photo}`}
          name={name}
        />
        <p className="mt-4 text-gray-500 font-medium tracking-wide text-xs">
          <span>- </span>
          {comment}
        </p>
        <span className="text-right font-semibold text-gray-400 text-xs pt-2 block">
          • {formattedDate(updated_at)}
        </span>
      </div>
    </>
  );
};
