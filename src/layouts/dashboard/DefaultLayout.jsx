import React, { useContext, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { OnlineStatusContext } from "../../context/OnlineStatusContext";

export const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { onlineStatus } = useContext(OnlineStatusContext);
  console.log(onlineStatus);
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} handleClick={handleSidebar} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-7xl min-h-screen p-4 md:p-6 2xl:p-10 bg-custom-gray-400">
              {/* {onlineStatus ? ( */}
                <Outlet />
              {/* ) : (
                <p>You are offline. Please check your internet connection.</p>
              )} */}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
};
