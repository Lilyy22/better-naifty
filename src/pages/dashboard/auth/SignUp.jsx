import React, { useState } from "react";
import { SIGNUP } from "./data/mutation";
import { useNavigate, useParams } from "react-router-dom";
import { AuthForm } from "./components/AuthForm";
import { useMutation } from "@apollo/client";
import { TopToast } from "../../../components/Toast";

export const SignUp = () => {
  const navigate = useNavigate();
  const { role } = useParams();
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [signUpUser, { loading }] = useMutation(SIGNUP);

  const [passwordToggle, setPasswordToggle] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.setItem("signup_email", email);

    try {
      await signUpUser({
        variables: {
          email: email,
          password: password,
          isInstructor: role ? true : false,
        },
      });
      setClose(false);
      setEmail("");
      setPassword("");
      setStatus({
        ...status,
        success: true,
      });
      setTimeout(() => {
        navigate("/verify");
      }, 2000);
    } catch (error) {
      setEmail("");
      setPassword("");
      setStatus({
        error: true,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
      setClose(false);
    }
  };
  return (
    <>
      {status.error && (
        <TopToast
          isSuccess={false}
          text={status.errorContent ?? "Something went wrong"}
          close={close}
          setClose={setClose}
        />
      )}
      {status.success && (
        <TopToast
          isSuccess={true}
          text="We have send a verification email to your account!"
          close={close}
          setClose={setClose}
        />
      )}
      <AuthForm
        isSignUp={true}
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        passwordToggle={passwordToggle}
        setEmail={setEmail}
        setPassword={setPassword}
        setPasswordToggle={setPasswordToggle}
        passFocus={passFocus}
        setPassFocus={setPassFocus}
        setValidPassword={setValidPassword}
        validPassword={validPassword}
        loading={loading}
      />
    </>
  );
};
