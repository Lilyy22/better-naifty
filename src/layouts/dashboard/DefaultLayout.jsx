import React, { useContext, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { OnlineStatusContext } from "../../context/OnlineStatusContext";

export const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const { onlineStatus } = useContext(OnlineStatusContext);
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden backdrop-blur-md bg-transparent">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} handleClick={handleSidebar} />

          <main>
            <div className="mx-auto max-w-screen-7xl min-h-screen p-4 md:p-6 2xl:p-10 bg-custom-gray-400 ">
              {/* {onlineStatus ? ( */}
              <Outlet />
              {/* ) : (
                <p>You are offline. Please check your internet connection.</p>
              )} */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
