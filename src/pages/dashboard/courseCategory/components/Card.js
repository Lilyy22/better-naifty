import React from "react";

export const Card = ({ thumbnail, title }) => {
  return (
    <div className="w-48 h-full rounded relative flex-shrink-0">
      <img
        className="rounded-lg w-full h-full object-cover m-auto brightness-[.6]"
        src={
          thumbnail
            ? thumbnail
            : "https://web.stlucie.k12.fl.us/wp-content/plugins/academy/assets//images/thumbnail-placeholder.png"
        }
        alt="category thumbnail"
      />
      <h1 className="absolute bottom-3 left-3 font-bold text-lg text-gray-100">
        {title}
      </h1>
    </div>
  );
};
