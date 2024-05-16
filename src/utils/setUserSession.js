import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const SetUserSession = ({ userData }) => {
  const {
    setAccessToken,
    setIsInstructor,
    setUserEmail,
    setIsSuperUser,
    setUserId,
  } = useContext(AuthContext);
  console.log("whyyyyyy");

  // Store the necessary data in localStorage
  localStorage.setItem("accessToken", userData?.token);
  localStorage.setItem("isInstructor", userData?.user?.is_instructor);
  localStorage.setItem("isSuperUser", userData?.user?.is_superuser);
  localStorage.setItem("userId", userData?.user?.id);
  localStorage.setItem("userEmail", userData?.user?.email);

  // Update the values in AuthContext using the extracted functions
  setAccessToken(userData?.token);
  setIsSuperUser(userData?.user?.is_superuser);
  setIsInstructor(userData?.user?.is_instructor);
  setUserEmail(userData?.user?.email);
  setUserId(userData?.user?.id);

  return true;
};
