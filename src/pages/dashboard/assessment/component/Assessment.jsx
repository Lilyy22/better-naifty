import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const Assessment = ({ id, question, options, answer, setAnswer, no }) => {
  const { userId } = useContext(AuthContext);

  const handleAnswer = (e) => {
    const updatedArray = [...answer];
    // Create a copy of the array
    const existingIndex = updatedArray.findIndex(
      (obj) => obj.question_id === e.target.name
    );

    if (existingIndex !== -1) {
      // If the item already exists, update its properties
      updatedArray[existingIndex] = {
        ...updatedArray[existingIndex],
        user_id: userId,
        answer_id: e.target.value,
      };

      setAnswer(updatedArray);
    } else {
      const newArray = {
        user_id: userId,
        question_id: e.target.name,
        answer_id: e.target.value,
      };

      updatedArray.push(newArray);
      setAnswer(updatedArray);
    }
  };

  return (
    <div className="p-4">
      <div className="font-bold mb-2">
        <label htmlFor={id}>
          <span className="text-xs text-gray-500 font-normal">Q{no}.</span>{" "}
          {question}
        </label>
      </div>
      {options.map(({ id: ansId, answer_text }) => (
        <div className="flex items-center mb-2 ml-2" key={ansId}>
          <input
            onChange={handleAnswer}
            className="w-3 h-3 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500"
            type="radio"
            id={ansId}
            name={id}
            value={ansId}
          />
          <label
            htmlFor={ansId}
            className="pl-2 text-sm font-medium text-gray-900"
          >
            {answer_text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Assessment;
