import React, { useState } from "react";
import { RESETPASSWORD } from "./data/mutation";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { TopToast } from "../../../components/Toast";
import { LandPrimaryButton } from "../../../components/Button";
import { H3 } from "../../../components/Heading";
import { InputPassword } from "../../../components/form/Input";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false);

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const email = sessionStorage.getItem("verify_email");
  const otp = sessionStorage.getItem("verify_otp");

  const [resetPassword, { loading: resetloader }] = useMutation(RESETPASSWORD);

  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
    successContent: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const { data } = await resetPassword({
          variables: { email: email, otp: otp, password: password },
        });
        if (data?.reset_password?.success) {
          setClose(false);
          setStatus({
            ...status,
            success: true,
            successContent: "Password Reset!",
          });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setClose(false);
          setStatus({
            ...status,
            error: true,
            success: false,
            errorContent: "Invalid Input",
          });
        }
      } catch (error) {
        setClose(false);
        setStatus({
          ...status,
          error: true,
          success: false,
          errorContent: error?.graphQLErrors?.[0]?.message,
        });
      }
    } else {
      setClose(false);
      setStatus({
        ...status,
        error: true,
        success: false,
        errorContent: "Password Do not Match!",
      });
    }
  };

  return (
    <>
      {status.error && (
        <TopToast
          text={status.errorContent ?? "Something went wrong."}
          isSuccess={false}
          close={close}
          setClose={setClose}
        />
      )}
      {status.success && (
        <TopToast
          text={status.successContent ?? "Successfull!"}
          isSuccess={true}
          close={close}
          setClose={setClose}
        />
      )}

      <form
        className="max-w-lg mx-auto px-4 rounded-xl lg:px-12"
        onSubmit={handleSubmit}
      >
        <H3 text="Reset Password" />
        <p className="text-gray-500 mb-12">Please Insert a New password.</p>

        <InputPassword
          dark={true}
          label="Password"
          password={password}
          setPassword={setPassword}
        />
        <InputPassword
          dark={true}
          label="Confirm Password"
          password={confirmPassword}
          setPassword={setConfirmPassword}
        />
        <LandPrimaryButton
          customStyle="w-full"
          type={resetloader ? "button" : "submit"}
          text={resetloader ? "•••" : "Reset"}
        />
      </form>
      <p className="text-gray-500 my-4 text-center">
        Already have an account.{" "}
        <Link
          to="/login"
          className="text-gray-300 hover:text-custom-purple-700"
        >
          Log In
        </Link>
      </p>
    </>
  );
};
