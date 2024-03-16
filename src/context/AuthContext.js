import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [isInstructor, setIsInstructor] = useState(
    localStorage.getItem("isInstructor")
  );
  const [isSuperUser, setIsSuperUser] = useState(
    localStorage.getItem("isSuperUser")
  );
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isInstructor,
        setIsInstructor,
        userId,
        setUserId,
        isSuperUser,
        setIsSuperUser,
        userEmail,
        setUserEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
