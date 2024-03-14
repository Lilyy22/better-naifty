import React from "react";

export const ToolTip = ({ text }) => {
  return (
    <span className="invisible absolute -left-1 -top-1 text-xs rounded shadow-lg py-2 px-3 bg-gray-900 text-white -mt-8 group-hover:visible whitespace-nowrap z-50">
      {text}
    </span>
  );
};
