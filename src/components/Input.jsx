import React from "react";

export const Input = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  is_required,
  label,
}) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-xs font-semibold tracking-wide"
      >
        {label}
      </label>

      <input
        type={type}
        id={id}
        className="border border-gray-200 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={is_required}
      />
    </div>
  );
};

export const Textarea = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  is_required,
  label,
}) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-xs font-semibold tracking-wide"
      >
        {label}
      </label>

      <textarea
        id={id}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 outline-none"
        placeholder={placeholder}
        rows={6}
        value={value}
        onChange={onChange}
        required={is_required}
      ></textarea>
    </div>
  );
};

export const FileUpload = ({ id, label, onChange, is_required }) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-xs font-semibold tracking-wide"
      >
        {label}
      </label>
      <div className="mb-6 relative border-2 w-full h-20 rounded-lg cursor-pointer mx-auto md:mx-0 border-dashed border-gray-300 bg-[#e9eef1] overflow-hidden">
        <div className="flex justify-center items-center h-full text-xs text-gray-700">
          Drop an Image or click here
        </div>
        <input
          id={id}
          type="file"
          className="z-10 absolute w-full h-full rounded-full border p-6 top-0 left-0 opacity-0 cursor-pointer"
          onChange={onChange}
          required={is_required}
        />
      </div>
    </div>
  );
};
