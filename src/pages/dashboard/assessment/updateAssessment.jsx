import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATEANSWER, DELETEANSWER, UPDATEQUESTION } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import { GETQUESTION } from "./data/query";
import Assessment from "./component/CRUD";
import { removeKey } from "../../../utils/removeKey";

const UpdateQuestion = ({ handleOpen, questionId, updated, setUpdated }) => {
  const {
    data,
    loading: questionLoading,
    refetch,
  } = useQuery(GETQUESTION, {
    variables: {
      questionId: questionId,
    },
  });

  const [question, setQuestion] = useState("");
  const [answerCount, setAnswerCount] = useState([]);

  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [updateQuestion] = useMutation(UPDATEQUESTION);
  const [deleteAnswer] = useMutation(DELETEANSWER);
  const [createAnswer] = useMutation(CREATEANSWER);

  const handleAnswerCount = () => {
    const updatedArray = [...answerCount]; // Create a copy of the array
    const lastItem = updatedArray[updatedArray.length - 1];
    const newArray = {
      id: lastItem.id + 1,
      answer_text: "",
      is_true: false,
      question_id: questionId,
    };

    updatedArray.push(newArray);
    setAnswerCount(updatedArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateQuestion({
        variables: {
          questionId: questionId,
          question: question,
        },
      });

      await deleteAnswer({
        variables: {
          questionId: questionId,
        },
      });

      const newAns = [...answerCount];
      const withQuestion = newAns.map((item) => {
        return {
          ...item,
          question_id: questionId,
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
      setClose(false);
      setStatus({
        ...status,
        success: true,
      });
      setTimeout(() => {
        setUpdated(!updated);
        handleOpen();
      }, 1000);
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

  useEffect(() => {
    if (!questionId) {
    } else {
      refetch();
      if (data?.question[0]) {
        setQuestion(data?.question[0]?.question_text);
        const withOutType = removeKey(data?.question[0]?.answers, "__typename");
        setAnswerCount(withOutType);
      }
    }
  }, [data?.question[0]]);

  return (
    <>
      {status.success && (
        <Toast
          text="Question Successfully Updated!"
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
        questionLoading={questionLoading}
      />
    </>
  );
};

export default UpdateQuestion;
