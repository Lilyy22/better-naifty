import { useState } from "react";

export const Accordion = ({ question, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        animate={{}}
        transition={{ duration: 1 }}
        className="w-full my-1 py-3 border-t border-gray-800 bg-gray-900/50 rounded-xl px-4"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span className="flex justify-between">
          {question}
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 512 512"
              className="my-auto fill-gray-400"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="9"
              viewBox="0 0 320 512"
              className="my-auto fill-gray-400"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          )}
        </span>
        {isActive && <p className="my-3 text-slate-400 text-left">{content}</p>}
      </button>
    </>
  );
};
