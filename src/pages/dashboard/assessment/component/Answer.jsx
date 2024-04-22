import React from "react";
import { Input } from "../../../../components/form/Input";

const Answer = ({
  loading,
  answerCount,
  setAnswerCount,
  index,
  count,
  questionLoading,
}) => {
  const handleAnswerChange = (e) => {
    const updatedArray = [...answerCount]; // Create a copy of the array
    updatedArray[count] = {
      ...updatedArray[count],
      answer_text: e.target.value,
    };
    setAnswerCount(updatedArray);
  };

  const handleCount = () => {
    if (answerCount?.length > 2) {
      const updatedArray = [...answerCount]; // Create a copy of the array
      const idx = updatedArray.findIndex((item) => item.id === index); // Get the index of the item

      if (idx !== -1) {
        updatedArray.splice(idx, 1); // Remove the item at the found index
        setAnswerCount(updatedArray); // Update the state with the modified array
      }
    }
  };

  return (
    <div className="p-4 border rounded-lg relative bg-gray-50 mb-4">
      <button
        type="button"
        className="absolute top-4 right-4 group"
        onClick={handleCount}
        disabled={loading || questionLoading ? true : false}
      >
        <svg
          aria-hidden="true"
          className="w-3 h-3 fill-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <Input
        id="answer"
        label="Option"
        type="text"
        placeholder="eg: data types"
        value={answerCount[count].answer_text}
        onChange={(e) => {
          handleAnswerChange(e);
        }}
        isRequired={true}
        disabled={loading || questionLoading ? true : false}
      />
      <label className="inline-flex items-center cursor-pointer pl-2">
        <input
          type="checkbox"
          checked={answerCount[count].is_true}
          onChange={(e) => {
            const updatedArray = [...answerCount]; // Create a copy of the array
            updatedArray[count] = {
              // get the answer at spec index
              ...updatedArray[count],
              is_true: e.target.checked,
            };
            setAnswerCount(updatedArray);
          }}
          className="sr-only peer"
        />
        <div className="relative w-9 h-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-2 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
        <span className="ms-3 text-xs font-medium text-gray-800">
          is Correct Answer
        </span>
      </label>
      <span className="italic text-gray-400 block text-[0.6rem]">
        Please toggle if this is the correct answer.
      </span>
    </div>
  );
};

export default Answer;
