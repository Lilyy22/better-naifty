import React, { useContext, useState } from "react";
import { AuthForm } from "./components/AuthForm";
import { LOGIN } from "./data/mutation";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { Toast } from "../../../components/Toast";

export const LogIn = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    error: false,
    errorContent: "",
  });

  const { setAccessToken, setIsInstructor, setUserEmail } =
    useContext(AuthContext);
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
      localStorage.setItem("accessToken", data.login?.token);
      localStorage.setItem("isInstructor", data.login?.user?.is_instructor);
      localStorage.setItem("userId", data.login?.user?.id);
      localStorage.setItem("userEmail", data.login?.user?.email);

      setAccessToken(data.login?.token);
      setIsInstructor(data.login?.user?.is_instructor);
      setUserEmail(data.login?.user?.email);

      setEmail("");
      setPassword("");
      navigate("/dashboard");
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
        <Toast
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
