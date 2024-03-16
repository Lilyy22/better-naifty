import { formattedDate } from "../../../../utils/formattedDate";

export const CommentCard = ({ photo, name, comment, updated_at }) => {
  return (
    <>
      <div className="my-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="h-7 w-7">
              <img
                className="rounded-full w-full h-full object-cover m-auto"
                src={`https://naifty.abelayalew.dev/media/${photo}`}
                alt="short profile card"
              />
            </div>
            <div className="hidden md:block">
              <p className="block text-gray-600 leading-tighter mb-0 font-semibold text-xs">
                {name}
              </p>
              <p className="text-[11px] text-gray-400 tracking-loose leading-none">
                {formattedDate(updated_at)}
              </p>
              <p className="text-gray-500 font-medium tracking-wide text-xs py-2">
                {comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
