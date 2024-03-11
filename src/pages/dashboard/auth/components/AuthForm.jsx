import React, { useEffect, useState } from "react";
import { Logo } from "../../../../components/Logo";
import { H2, H3 } from "../../../../components/Heading";
import { Link } from "react-router-dom";
import { LandPrimaryButton } from "../../../../components/Button";
import { motion } from "framer-motion";

export const AuthForm = ({
  handleSubmit,
  isSignUp,
  email,
  password,
  setEmail,
  setPassword,
  passwordToggle,
  setPasswordToggle,
  setPassFocus,
  passFocus,
  validPassword,
  setValidPassword,
  loading,
}) => {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  useEffect(() => {
    if (isSignUp) {
      const pwdRes = PWD_REGEX.test(password);
      setValidPassword(pwdRes);
    }
  }, [password]);

  return (
    <>
      <div className="w-full flex justify-center items-center h-screen bg-gray-900">
        <div className="flex bg-gray-900 border-gray-800 m-auto rounded-xl lg:w-[70%] md:border">
          <div className="w-full py-8 md:py-10 xl:py-16 lg:w-1/2 lg:my-auto">
            <Logo customStyle="mx-auto lg:w-20 mb-12" />
            <form
              className="max-w-lg mx-auto px-4 rounded-xl lg:px-12"
              onSubmit={handleSubmit}
            >
              <H3 text={isSignUp ? "Sign Up" : "Log In"} />
              <p className="text-gray-500">
                Insert your credentials to {isSignUp ? "Sign Up" : "Log In"}.
              </p>
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
              <div className="text-gray-300 mb-6 relative">
                <label htmlFor="password">
                  Password <span className="text-red-400">*</span>
                </label>
                <input
                  type={passwordToggle ? "text" : "password"}
                  id="password"
                  className="passInput bg-slate-900 border border-gray-800 rounded-lg w-full py-1.5 px-3 mt-2 outline-none focus:ring-2 ring-purple-900"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  onFocus={(e) => {
                    isSignUp ?? setPassFocus(true);
                  }}
                  onBlur={(e) => {
                    isSignUp ?? setPassFocus(false);
                  }}
                />
                <button
                  type="button"
                  className="absolute right-3 top-11"
                  aria-label="toggle password"
                  onClick={() => setPasswordToggle(!passwordToggle)}
                >
                  {passwordToggle ? (
                    <svg
                      className="fill-gray-500 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  ) : (
                    <svg
                      className="fill-gray-600 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                    </svg>
                  )}
                </button>
                {!isSignUp && (
                  <Link className="text-sm text-gray-300 float-right my-4 hover:text-custom-purple-700">
                    Forgot Password?
                  </Link>
                )}
                {passFocus && !validPassword && (
                  <div className="bg-slate-800 rounded p-2 text-xs text-amber-700 absolute w-full">
                    must be at least 8 characters and include atleast one
                    capital letter, number, and !@#$%.
                  </div>
                )}
              </div>

              <LandPrimaryButton
                type="submit"
                customStyle="w-full"
                text={loading ? "•••" : isSignUp ? "Sign Up" : "Log In"}
              />

              <p className="text-gray-500 my-4 text-center">
                {isSignUp ? "Already" : "Do not"} have an account.
                <Link
                  to={isSignUp ? "/login" : "/signup"}
                  className="text-gray-300 hover:text-custom-purple-700"
                >
                  {isSignUp ? " Log In" : " Sign Up"}
                </Link>
              </p>
            </form>
          </div>

          <div className="hidden w-1/2 rounded-tr-xl rounded-br-xl bg-gradient-to-r from-[#4b1248] to-[#061161] items-end lg:flex lg:relative">
            <motion.img
              initial={{ y: -100 }}
              whileInView={{ y: 10 }}
              transition={{ duration: 1 }}
              className="absolute w-24 top-4 -left-12"
              src={require("../../../../assets/3d-circle.png")}
              alt="3d circle"
            />
            <div className="max-w-sm m-auto text-center px-8 xl:max-w-md xl:px-2">
              <H2 text="Unlock Your Potential with NAIFTY" />
              {/* <Subtitle text="Discover interactive courses and gain practical skills to excel in the real world." /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
