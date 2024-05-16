import { useNavigate } from "react-router-dom";
import { REQUESTOTP, VERIFYOTP } from "./data/mutation";
import { useState } from "react";
import { TopToast } from "../../../components/Toast";
import { Logo } from "../../../components/Logo";
import { H3 } from "../../../components/Heading";
import OTPInput from "react-otp-input";
import { LandPrimaryButton } from "../../../components/Button";
import { useMutation } from "@apollo/client";
import { SetUserSession } from "../../../utils/setUserSession";

const VerifyResetOtp = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
    successContent: "",
  });

  const email = sessionStorage.getItem("verify_email");
  const OTP_REGEX = /^\d{6}$/;

  const [otp, setOtp] = useState();
  const [validOtp, setValidOtp] = useState(true);

  const [verifyUser, { loading: verifyloader }] = useMutation(VERIFYOTP);
  const [requestOtp, { loading: resedLoader }] = useMutation(REQUESTOTP);

  const handleVerification = async (e) => {
    e.preventDefault();

    if (OTP_REGEX.test(otp)) {
      try {
        const { data } = await verifyUser({
          variables: { email: email, otp: otp },
        });
        if (data?.verify_otp?.success) {
          sessionStorage.setItem("verify_otp", otp);
          setOtp("");
          setClose(false);
          setStatus({
            ...status,
            success: true,
            successContent: "Account Verified!",
          });
          SetUserSession();
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          setOtp("");
          setClose(false);
          setStatus({
            ...status,
            error: true,
            success: false,
            errorContent: "Invalid OTP",
          });
        }
      } catch (error) {
        setOtp("");
        setClose(false);
        setStatus({
          ...status,
          error: true,
          success: false,
          errorContent: error?.graphQLErrors?.[0]?.message,
        });
      }
    } else {
      setValidOtp(false);
      setClose(false);
      setStatus({
        ...status,
        error: true,
        success: false,
        errorContent: "Invalid OTP",
      });
      setTimeout(() => {
        setValidOtp(true);
      }, 2000);
    }
  };

  const handleResendOtp = async () => {
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

      <div className="w-full py-8 md:py-10 xl:py-16 lg:w-1/2 lg:my-auto">
        <Logo customStyle="mx-auto lg:w-20 mb-12" />
        <form
          className="max-w-lg mx-auto px-4 rounded-xl lg:px-12 text-center"
          onSubmit={handleVerification}
        >
          <H3 text="Verify Account" />
          <p className="text-gray-500">Please Insert code to Reset password.</p>
          <div className="text-gray-200 my-10 relative">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="text-purple-500 px-1"></span>}
              renderInput={(props) => <input {...props} />}
              inputStyle="rounded-lg w-9 h-10 bg-custom-gray-600 px-3 border border-gray-700 focus:ring-2 ring-purple-900 text-white text-lg"
              containerStyle="justify-center"
              skipDefaultStyles={true}
              required
            />
            {!validOtp && (
              <div className="bg-slate-800 rounded p-2 text-xs text-amber-700 absolute top-11 w-full">
                A 6 digit Code is required.
              </div>
            )}
          </div>

          <LandPrimaryButton
            type={otp !== null ? "submit" : "button"}
            customStyle="w-full"
            text={verifyloader ? "•••" : "Verify"}
          />
        </form>
        <p className="text-gray-500 my-4 text-center">
          Did not get Otp.{" "}
          <button
            type="button"
            onClick={handleResendOtp}
            className="text-gray-300 hover:text-custom-purple-700"
          >
            {resedLoader ? " Sending ••• " : "Resend"}
          </button>
        </p>
      </div>
    </>
  );
};

export default VerifyResetOtp;
