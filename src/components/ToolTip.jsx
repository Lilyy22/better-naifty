import React from "react";

export const ToolTip = ({ text }) => {
  return (
    <span className="invisible absolute -left-1 -top-1 text-xs rounded shadow-lg py-2 px-3 bg-gray-900 text-white -mt-8 group-hover:visible whitespace-nowrap z-50">
      {text}
    </span>
  );
};

export const BigToolTip = ({ text, img }) => {
  return (
    <div className="invisible absolute left-[20%] top-0 text-xs rounded-lg shadow-lg bg-gray-900 text-white group-hover:visible whitespace-nowrap z-50">
      <div className="flex">
        <img src={img} className="w-full h-24 object-cover rounded-l-lg" />
        <div className="p-2">{text}</div>
      </div>
    </div>
  );
};
