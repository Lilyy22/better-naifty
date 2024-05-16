import React from "react";
import { RESETPASSWORD } from "./data/mutation";

export const ChangePassword = () => {
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
        if (data?.verify_otp?.success) {
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

      <div className="w-full py-8 md:py-10 xl:py-16 lg:w-1/2 lg:my-auto">
        <Logo customStyle="mx-auto lg:w-20 mb-12" />
        <form
          className="max-w-lg mx-auto px-4 rounded-xl lg:px-12"
          onSubmit={handleSubmit}
        >
          <H3 text="Reset Password" />
          <p className="text-gray-500">Please Insert a New password.</p>

          <div className="text-gray-200 mb-6 mt-12">
            <label htmlFor="password">
              New Password <span className="text-red-400">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="bg-slate-900 border border-gray-800 rounded-lg w-full py-1.5 px-3 mt-2 outline-none focus:ring-2 ring-purple-900"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-gray-200 mb-6 mt-12">
            <label htmlFor="confirmPassword">
              Confirm Password <span className="text-red-400">*</span>
            </label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              className="bg-slate-900 border border-gray-800 rounded-lg w-full py-1.5 px-3 mt-2 outline-none focus:ring-2 ring-purple-900"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <LandPrimaryButton
            customStyle="w-full"
            type={resetloader ? "button" : "submit"}
            text={resetloader ? "•••" : "Reset"}
          />
        </form>
      </div>
    </>
  );
};
