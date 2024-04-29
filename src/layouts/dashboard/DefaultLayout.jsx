import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useProfile } from "../../hooks/useProfile";
import OptionalModal from "../../components/modal/OptionalModal";

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
        <OptionalModal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          btnText="Create Profile"
          goto="/dashboard/profile"
          heading=" We would like to know you! ☻"
          subText="Create your profile, it will only take a few secounds."
        />
      )}
      <div className="flex h-screen overflow-hidden backdrop-blur-md bg-transparent">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} handleClick={handleSidebar} />

          <main>
            <div className="mx-auto max-w-screen-7xl min-h-screen px-4 md:px-8 py-6 bg-custom-gray-400 ">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
