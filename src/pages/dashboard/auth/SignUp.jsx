import React, { useState } from "react";
import { SIGNUP } from "./data/mutation";
import { useNavigate, useParams } from "react-router-dom";
import { AuthForm } from "./components/AuthForm";
import { useMutation } from "@apollo/client";

export const SignUp = () => {
  const navigate = useNavigate();
  const { role } = useParams();

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
      const { data } = await signUpUser({
        variables: {
          email: email,
          password: password,
          isInstructor: role ? true : false,
        },
      });
      if (data) {
        setEmail("");
        setPassword("");
        navigate("/verify");
      }
    } catch (err) {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
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
