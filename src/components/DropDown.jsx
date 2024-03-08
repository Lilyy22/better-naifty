import React from "react";

const DropDown = ({ onChange, loading, data, id, label }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-xs font-semibold tracking-wide"
      >
        {label}
      </label>
      <select
        id={id}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 outline-none"
      >
        {loading ? (
          <option>•••</option>
        ) : (
          data?.map(({ id, name }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })
        )}
      </select>
    </>
  );
};

export default DropDown;
