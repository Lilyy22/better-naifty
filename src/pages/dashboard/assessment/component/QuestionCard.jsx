import React from "react";

const QuestionCard = ({ question, options }) => {
  return (
    <div className="mb-8">
      <h1 className="font-medium mb-4 text-base">{question}</h1>
      <ul>
        {options.map(({ option }) => {
          return (
            <li className="mb-2 text-base flex gap-1">
              <svg
                className="w-[12px] h-[10px] fill-gray-400 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg>
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionCard;
