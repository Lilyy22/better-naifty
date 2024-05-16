import React, { useState } from "react";
import { AuthForm } from "./components/AuthForm";
import { LOGIN } from "./data/mutation";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { TopToast } from "../../../components/Toast";
import { SetUserSession } from "../../../utils/setUserSession";

export const LogIn = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    error: false,
    errorContent: "",
  });

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
      SetUserSession({userData: data?.login});
      console.log("herrr")
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.log("herrreeeee")
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
