import { createContext, useEffect, useState } from "react";

export const OnlineStatusContext = createContext();

export const OnlineStatusProvider = ({ children }) => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    // return () => {
    //   window.removeEventListener("offline", () => {
    //     setOnlineStatus(false);
    //   });
    //   window.removeEventListener("online", () => {
    //     setOnlineStatus(true);
    //   });
    // };
  }, [onlineStatus]);

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {children}
    </OnlineStatusContext.Provider>
  );
};
