import React from "react";

export const H1 = ({ text }) => {
  return (
    <>
      <h1 className="font-extrabold text-4xl mb-4 text-gray-200 lg:text-5xl">
        {text}
      </h1>
    </>
  );
};

export const H2 = ({ text }) => {
  return (
    <>
      <h1 className="font-extrabold text-3xl mb-4 text-gray-300 lg:text-4xl">
        {text}
      </h1>
    </>
  );
};

export const H3 = ({ text }) => {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4 text-gray-300 lg:text-3xl">
        {text}
      </h1>
    </>
  );
};

export const H4 = ({ text }) => {
  return (
    <>
      <h1 className="font-bold text-xl mb-4 text-gray-300 lg:text-2xl">
        {text}
      </h1>
    </>
  );
};

export const H5 = ({ text }) => {
  return (
    <>
      <h1 className="font-bold text-lg mb-4 text-gray-300 lg:text-xl">
        {text}
      </h1>
    </>
  );
};
