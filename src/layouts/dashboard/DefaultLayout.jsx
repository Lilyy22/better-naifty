import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useProfile } from "../../hooks/useProfile";
import { PrimaryLink } from "../../components/Link";
import { useCheckOnlineStatus } from "../../hooks/useCheckOnlineStatus";

export const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { profile } = useProfile();

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      if (profile === 0) setIsOpen(!isOpen);
    }, 2000);
  }, [profile]);

  return (
    <>
      {profile === 0 && (
        <div className={isOpen ? "" : "hidden"}>
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-800/30 "
          >
            <div className="relative p-6 w-full max-w-md h-full md:h-auto">
              <div className="bg-white shadow rounded-lg p-6 text-center max-w-sm">
                <h3 className="font-mont font-semibold text-sm text-purple-700">
                  We would like to know you! ☻
                </h3>
                <p className="my-8 font-medium text-gray-500">
                  Create your profile, it will only take a few secounds.
                </p>
                <div className="flex gap-2 justify-center">
                  <PrimaryLink
                    goto="/dashboard/profile"
                    customStyle="w-full"
                    text="Create Profile"
                    handleClick={() => setIsOpen(!isOpen)}
                  />
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-gray-400 font-semibold text-xs hover:text-gray-600"
                  >
                    Maybe, Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex h-screen overflow-hidden backdrop-blur-md bg-transparent">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} handleClick={handleSidebar} />

          <main>
            <div className="mx-auto max-w-screen-7xl min-h-screen px-4 md:px-8 md:py-6  bg-custom-gray-400 ">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
