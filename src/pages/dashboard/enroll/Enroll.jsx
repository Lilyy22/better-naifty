import React, { useState } from "react";
import { PrimaryButton } from "../../../components/Button";
import { CREATEENROLLMENT } from "./data/mutation";
import { useMutation } from "@apollo/client";
import { Toast } from "../../../components/Toast";

const Enroll = ({ courseId, studentId, setEnrolled }) => {
  const [enroll, { loading }] = useMutation(CREATEENROLLMENT);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const handleEnroll = async () => {
    try {
      const { data } = await enroll({
        variables: {
          courseId: courseId,
          studentId: studentId,
        },
      });

      const paymentlink = data?.create_courseenrollment?.data[0]?.payment_link;
      paymentlink ? (window.location.href = paymentlink) : new Error();
      setClose(false);
      setStatus({ ...status, success: true });
      // setEnrolled(true);
    } catch (error) {
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
          isSuccess={true}
          text="You are redirected for Payment!"
          close={close}
          setClose={setClose}
        />
      )}
      {status.error && (
        <Toast
          isSuccess={false}
          text={status.errorContent ?? "Something went wrong"}
          close={close}
          setClose={setClose}
        />
      )}

      <div className="h-auto">
        <PrimaryButton
          text={loading ? "•••" : "Enroll Now"}
          isDisabled={loading ? true : false}
          handleClick={handleEnroll}
        />
      </div>
    </>
  );
};

export default Enroll;
