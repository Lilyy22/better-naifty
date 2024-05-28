import React, { useState } from "react";

export const Input = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  isRequired,
  label,
  disabled,
}) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={id}
        className="inline-block mb-2 text-xs font-semibold tracking-wide"
      >
        {label}
      </label>
      {isRequired && <span className="text-red-500 pl-1 text-sm">*</span>}
      <input
        type={type}
        id={id}
        className="border border-gray-200 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
        disabled={disabled}
      />
    </div>
  );
};

export const Textarea = ({
  id,
  placeholder,
  value,
  onChange,
  isRequired,
  label,
  disabled,
  noLabel,
}) => {
  return (
    <div className="w-full mb-4">
      {!noLabel && (
        <label
          htmlFor={id}
          className="inline-block mb-2 text-xs font-semibold tracking-wide"
        >
          {label}
        </label>
      )}
      {isRequired && <span className="text-red-500 pl-1 text-sm">*</span>}
      <textarea
        id={id}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 outline-none"
        placeholder={placeholder}
        rows={6}
        value={value}
        onChange={onChange}
        required={isRequired}
        disabled={disabled}
      ></textarea>
    </div>
  );
};

export const FileUpload = ({
  id,
  label,
  onChange,
  isRequired,
  thumbnail,
  disabled,
  accept,
}) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={id}
        className="inline-block mb-2 text-xs font-semibold tracking-wide"
      >
        {label}
      </label>
      {isRequired && <span className="text-red-500 pl-1 text-sm">*</span>}

      <div className="mb-6 relative border-2 w-full h-20 rounded-lg cursor-pointer mx-auto md:mx-0 border-dashed border-gray-300 bg-[#e9eef1] overflow-hidden">
        <div className="flex justify-center items-center h-full text-xs text-gray-700">
          {thumbnail
            ? thumbnail?.name
              ? thumbnail.name
              : thumbnail
            : "Drop a Video file or click here"}
        </div>
        <input
          id={id}
          type="file"
          className="z-10 absolute w-full h-full rounded-full border p-6 top-0 left-0 opacity-0 cursor-pointer"
          onChange={onChange}
          required={isRequired}
          disabled={disabled}
          accept={accept}
        />
      </div>
    </div>
  );
};

export const InputPassword = ({ label, password, setPassword, dark }) => {
  const [passwordToggle, setPasswordToggle] = useState(false);

  return (
    <div className="relative mb-4">
      <label
        htmlFor="password"
        className={`inline-block mb-2 font-semibold tracking-wide ${
          dark ? "text-gray-200" : ""
        }`}
      >
        {label} <span className="text-red-400">*</span>
      </label>
      <input
        type={passwordToggle ? "text" : "password"}
        id="password"
        className={`group border text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 outline-none ${
          dark
            ? "bg-slate-900 border-gray-800 text-gray-200"
            : "border-gray-200 text-gray-900"
        }`}
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="button"
        className="absolute right-3 top-11"
        aria-label="toggle password"
        onClick={() => setPasswordToggle(!passwordToggle)}
      >
        {passwordToggle ? (
          <svg
            className={`w-4 h-4 hover:fill-purple-300 ${
              dark ? "fill-gray-500" : "fill-gray-200"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
          </svg>
        ) : (
          <svg
            className={`w-4 h-4 hover:fill-purple-300 ${
              dark ? "fill-gray-500" : "fill-gray-200"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
          </svg>
        )}
      </button>
    </div>
  );
};
