import React, { useState } from "react";
import { AuthForm } from "./components/AuthForm";
import { LOGIN } from "./data/mutation";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const navigate = useNavigate();

  const [loginUser, { loading }] = useMutation(LOGIN);

  const [passwordToggle, setPasswordToggle] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email: email, password: password },
      });
      if (data) {
        localStorage.setItem("accessToken", data.login?.token);
        localStorage.setItem("isInstructor", data.login?.user?.is_instructor);
        localStorage.setItem("userId", data.login?.user?.id);
        localStorage.setItem("userEmail", data.login?.user?.email);
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      }
    } catch (err) {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
      <AuthForm
        isSignUp={false}
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        passwordToggle={passwordToggle}
        setEmail={setEmail}
        setPassword={setPassword}
        setPasswordToggle={setPasswordToggle}
        loading={loading}
      />
    </>
  );
};
