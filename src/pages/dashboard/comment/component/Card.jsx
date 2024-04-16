import { formattedDate } from "../../../../utils/formattedDate";

export const CommentCard = ({ photo, name, comment, updated_at }) => {
  return (
    <>
      <li role="article" className="relative pl-8">
        <div className="flex flex-col flex-1 gap-2">
          <div className="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white">
            <img
              src={`https://api.naifty.academy/media/${photo}`}
              alt={name}
              width="48"
              height="48"
              className="max-w-full h-full rounded-full object-cover"
            />
          </div>
          <h4 className="text-sm font-medium text-slate-700 md:flex-row lg:items-center">
            <span className="flex-1">{name} </span>
            <span className="text-[0.7rem] font-normal text-slate-400">
              on {formattedDate(updated_at)}
            </span>
          </h4>
          <p className="text-slate-500 text-sm leading-3">{comment}</p>
        </div>
      </li>
    </>
  );
};
