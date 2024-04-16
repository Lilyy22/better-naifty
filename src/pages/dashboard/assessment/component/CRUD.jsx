import React from "react";
import { Input } from "../../../../components/form/Input";
import { PrimaryButton } from "../../../../components/Button";
import { DashForm } from "../../../../components/form/Form";
import Answer from "../Answer";

const Assessment = ({
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
      <div className="overflow-x-hidden fixed top-0 flex left-0 z-40 justify-center items-center min-h-full w-full bg-gray-700/20">
        <div className="w-full max-w-xl xl:max-w-3xl">
          <DashForm title="Assessment">
            <button
              className="absolute top-4 right-4 group"
              onClick={handleOpen}
              disabled={loading ? true : false}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 fill-current group-hover:fill-red-600"
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
          </DashForm>
        </div>
      </div>
    </>
  );
};

export default Assessment;
