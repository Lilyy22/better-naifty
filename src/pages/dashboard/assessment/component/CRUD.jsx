import React from "react";
import { Input } from "../../../../components/form/Input";
import { PrimaryButton } from "../../../../components/Button";
import { DashForm } from "../../../../components/form/Form";
import Answer from "./Answer";
import { FormModal } from "../../../../components/modal/FormModal";

const Question = ({
  handleOpen,
  loading,
  questionLoading,
  question,
  setQuestion,
  handleSubmit,
  answerCount,
  setAnswerCount,
}) => {
  const handleAnswerCount = () => {
    if (answerCount.length < 6) {
      const updatedArray = [...answerCount]; // Create a copy of the array
      const lastItem = updatedArray[updatedArray.length - 1];
      const newArray = {
        id: lastItem.id + 1,
        answer_text: "",
        is_true: false,
        question_id: "",
      };

      updatedArray.push(newArray);
      setAnswerCount(updatedArray);
    }
  };

  return (
    <>
      <FormModal loading={loading} handleOpen={handleOpen} title="Assessment">
        <form className="p-6 relative" onSubmit={handleSubmit}>
          <Input
            id="name"
            label="Question"
            type="text"
            placeholder="eg: what is variable"
            value={questionLoading ? "•••" : question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            isRequired={true}
            disabled={loading || questionLoading ? true : false}
          />
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className={`px-4 py-1 text-xs rounded-lg relative ${
                loading || questionLoading || answerCount?.length >= 6
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-purple-200"
              }`}
              onClick={handleAnswerCount}
              disabled={
                loading || questionLoading || answerCount?.length > 6
                  ? true
                  : false
              }
            >
              Add Option
              <div className="bg-purple-500 absolute -top-3 -right-2 rounded-full inline-block px-1.5 py-0.5 border z-10 text-white">
                {answerCount?.length}
              </div>
            </button>
          </div>
          <div className="h-[22rem] overflow-y-auto mb-2">
            {answerCount?.map(({ id }, index) => (
              <Answer
                key={id}
                index={id}
                count={index}
                loading={loading}
                answerCount={answerCount}
                setAnswerCount={setAnswerCount}
                questionLoading={questionLoading}
              />
            ))}
          </div>
          <PrimaryButton
            type={loading || questionLoading ? "button" : "submit"}
          >
            {loading || questionLoading ? "•••" : "Submit"}
          </PrimaryButton>
        </form>
      </FormModal>
    </>
  );
};

export default Question;
