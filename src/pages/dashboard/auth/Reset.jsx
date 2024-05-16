import { Link, useNavigate } from "react-router-dom";
import { REQUESTOTP } from "./data/mutation";
import { useState } from "react";
import { TopToast } from "../../../components/Toast";
import { Logo } from "../../../components/Logo";
import { H3 } from "../../../components/Heading";
import { LandPrimaryButton } from "../../../components/Button";
import { useMutation } from "@apollo/client";

const Reset = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
    successContent: "",
  });

  const [otp, setOtp] = useState();
  const [requestOtp, { loading: resedLoader }] = useMutation(REQUESTOTP);

  const handleResendOtp = async (e) => {
    e.preventDefault();
    try {
      await requestOtp({ variables: { email: email } });
      setOtp("");
      setClose(false);
      setStatus({
        ...status,
        error: false,
        success: true,
        successContent: "We have send a Reset code to your email.",
      });
      sessionStorage.setItem("verify_email", email);
      setTimeout(() => {
        navigate("/verify-reset");
      }, 2000);
    } catch (error) {
      setClose(false);
      setStatus({
        ...status,
        error: true,
        success: false,
        errorContent: error?.graphQLErrors?.[0]?.message,
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
        onSubmit={handleResendOtp}
      >
        <H3 text="Get OTP" />
        <p className="text-gray-500">Please Insert email and get OTP.</p>
        <div className="text-gray-200 mb-6 mt-12">
          <label htmlFor="email">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="bg-slate-900 border border-gray-800 rounded-lg w-full py-1.5 px-3 mt-2 outline-none focus:ring-2 ring-purple-900"
            placeholder="eg:johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <LandPrimaryButton
          type={resedLoader ? "button" : "submit"}
          customStyle="w-full"
          text={resedLoader ? "•••" : "Send"}
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

export default Reset;
