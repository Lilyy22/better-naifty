import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ thumbnail, title, categoryId }) => {
  const [onload, setOnLoad] = useState(false);
  return (
    <Link
      to={`/dashboard/courses/${categoryId}`}
      className="w-48 h-full rounded relative flex-shrink-0"
    >
      <img
        className="rounded-lg w-full h-full object-cover m-auto brightness-[.6]"
        src={
          thumbnail
            ? `https://api.naifty.academy/media/${thumbnail}`
            : "https://web.stlucie.k12.fl.us/wp-content/plugins/academy/assets//images/thumbnail-placeholder.png"
        }
        alt="category thumbnail"
        onLoad={() => setOnLoad(!onload)}
      />
      <h1 className="absolute bottom-3 left-3 font-bold text-lg text-gray-100">
        {title}
      </h1>
    </Link>
  );
};
