import React, { useContext, useState } from "react";
import { AuthForm } from "./components/AuthForm";
import { LOGIN } from "./data/mutation";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { TopToast } from "../../../components/Toast";
import { AuthContext } from "../../../context/AuthContext";

export const LogIn = () => {
  const navigate = useNavigate();
  const {
    setAccessToken,
    setIsInstructor,
    setUserEmail,
    setIsSuperUser,
    setUserId,
  } = useContext(AuthContext);

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

      // Store the necessary data in localStorage
      localStorage.setItem("accessToken", data?.login?.token);
      localStorage.setItem("isInstructor", data?.login?.user?.is_instructor);
      localStorage.setItem("isSuperUser", data?.login?.user?.is_superuser);
      localStorage.setItem("userId", data?.login?.user?.id);
      localStorage.setItem("userEmail", data?.login?.user?.email);

      // Update the values in AuthContext using the extracted functions
      setAccessToken(data?.login?.token);
      setIsSuperUser(data?.login?.user?.is_superuser);
      setIsInstructor(data?.login?.user?.is_instructor);
      setUserEmail(data?.login?.user?.email);
      setUserId(data?.login?.user?.id);

      console.log("herrr");
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.log("herrreeeee");
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
