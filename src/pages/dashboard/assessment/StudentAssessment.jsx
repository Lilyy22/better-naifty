import React, { useState } from "react";
import { PrimaryButton } from "../../../components/Button";
import { useMutation, useQuery } from "@apollo/client";
import { GETASSESSMENT } from "./data/query";
import { useParams } from "react-router-dom";
import Assessment from "./component/Assessment";
import { CREATESTUDENTASSESSMENT } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Score from "./Score";

const StudentAssessment = () => {
  const { course_id } = useParams();
  const [answer, setAnswer] = useState([]);

  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [createAssessment] = useMutation(CREATESTUDENTASSESSMENT);
  const { data } = useQuery(GETASSESSMENT, {
    variables: {
      courseId: course_id,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createAssessment({
        variables: {
          studentAssessment: answer,
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
          text="Assessment Successfully taken!"
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
      <Score />
      <form
        className="font-naifty bg-white p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <PrimaryButton>Take Assessment</PrimaryButton>
        {data?.question?.map(({ id, question_text, answers }) => {
          //answers is a list
          return (
            <Assessment
              key={id}
              id={id}
              question={question_text}
              options={answers}
              answer={answer}
              setAnswer={setAnswer}
            />
          );
        })}
        <PrimaryButton type={loading ? "button" : "submit"}>
          {loading ? "•••" : "Submit"}
        </PrimaryButton>
      </form>
    </>
  );
};

export default StudentAssessment;
