import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATEANSWER, CREATEQUESTION } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Assessment from "./component/CRUD";
import { removeKey } from "../../../utils/removeKey";

const CreateAssessment = ({ handleOpen, courseId, updated, setUpdated }) => {
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
    { id: 2, answer_text: "", is_true: false, question_id: "" },
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
      const withOutId = removeKey(withQuestion, "id");

      // request answer using the new answercount without id
      await createAnswer({
        variables: {
          inputs: withOutId,
        },
      });

      setLoading(false);
      setTimeout(() => {
        setUpdated(!updated);
        handleOpen();
      }, 1000);
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
      setTimeout(() => {
        handleOpen();
      }, 1000);
    }
  };

  return (
    <>
      {status.success && (
        <Toast
          text="Question Successfully created!"
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

      <Assessment
        question={question}
        loading={loading}
        setQuestion={setQuestion}
        answerCount={answerCount}
        setAnswerCount={setAnswerCount}
        handleAnswerCount={handleAnswerCount}
        handleSubmit={handleSubmit}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default CreateAssessment;
