import React from "react";

const DropDown = ({ onChange, loading, data, id, label, isRequired }) => {
  return (
    <>
      <div className="w-full mb-4">
        <label
          htmlFor={id}
          className="inline-block mb-2 text-xs font-semibold tracking-wide"
        >
          {label}
        </label>
        {isRequired && <span className="text-red-500 pl-1 text-sm">*</span>}
        <select
          id={id}
          onChange={onChange}
          required={isRequired}
          className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full p-[0.7rem] outline-none"
        >
          {loading ? (
            <option>•••</option>
          ) : (
            data?.map(({ id: catID, name }) => {
              return (
                <option key={catID} value={catID}>
                  {name}
                </option>
              );
            })
          )}
        </select>
      </div>
    </>
  );
};

export default DropDown;
