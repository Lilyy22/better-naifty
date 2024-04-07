import React, { useState } from "react";
import { DashForm } from "../../../components/form/Form";
import { Input } from "../../../components/form/Input";
import Answer from "./Answer";
import { PrimaryButton } from "../../../components/Button";
import { useMutation } from "@apollo/client";
import { CREATEANSWER, CREATEQUESTION } from "./data/mutation";
import { Toast } from "../../../components/Toast";

const CreateAssessment = ({ handleOpen, courseId }) => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [answerCount, setAnswerCount] = useState([
    { id: 1, answer_text: "", is_true: false, question_id: "" },
  ]);

  const [createQuestion] = useMutation(CREATEQUESTION);
  const [createAnswer] = useMutation(CREATEANSWER);

  const handleAnswerCount = () => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await createQuestion({
        variables: {
          courseId: courseId,
          question: question,
        },
      });

      const newAns = [...answerCount];
      const withQuestion = newAns.map((item) => {
        return {
          ...item,
          question_id: data?.create_question?.data[0]?.id,
        };
      });

      //   delete id from the objs of answercount
      const withOutId = withQuestion.map((obj) => {
        return Object.keys(obj)
          .filter((key) => key !== "id")
          .reduce((newObj, key) => {
            newObj[key] = obj[key];
            return newObj;
          }, {});
      });

      // request answer using the new answercount without id
      await createAnswer({
        variables: {
          inputs: withOutId,
        },
      });
      setLoading(false);
      setClose(false);
      setStatus({
        ...status,
        success: true,
      });
    } catch (error) {
      setLoading(false);
      setClose(false);
      setStatus({
        success: false,
        error: true,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };

  return (
    <>
      {status.success && (
        <Toast
          text="Episode Successfully created!"
          isSuccess={true}
          close={close}
          setClose={setClose}
        />
      )}
      {status.error && (
        <Toast
          text={status.errorContent ?? "Something went wrong!"}
          isSuccess={false}
          close={close}
          setClose={setClose}
        />
      )}
      <div className="overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center min-h-full w-full bg-gray-700/20">
        <div className="w-full max-h-[80vh] max-w-xl xl:max-w-3xl overflow-y-auto">
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
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                isRequired={true}
                disabled={loading ? true : false}
              />
              <button
                type="button"
                className="absolute top-4 right-4 bg-purple-200 px-4 py-1 text-xs rounded-lg"
                onClick={handleAnswerCount}
                disabled={loading ? true : false}
              >
                Add Option
              </button>
              {answerCount.map(({ id }, index) => (
                <Answer
                  key={id}
                  index={id}
                  count={index}
                  loading={loading}
                  answerCount={answerCount}
                  setAnswerCount={setAnswerCount}
                />
              ))}
              <PrimaryButton type="submit">
                {loading ? "•••" : "Create"}
              </PrimaryButton>
            </form>
          </DashForm>
        </div>
      </div>
    </>
  );
};

export default CreateAssessment;
