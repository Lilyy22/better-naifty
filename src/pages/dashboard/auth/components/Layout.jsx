import React from "react";
import { motion } from "framer-motion";
import { Slider } from "./Slider";
import { useCheckOnlineStatus } from "../../../../hooks/useCheckOnlineStatus";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const isOnline = useCheckOnlineStatus();

  return (
    <>
      {isOnline ? (
        <div className="w-full flex justify-center items-center h-screen bg-gray-900">
          <div className="flex bg-gray-900 border-gray-800 m-auto rounded-xl lg:w-[70%] md:border">
            <Outlet />

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
                <Slider />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center h-[60vh]">
          <div className="max-w-lg mx-auto">
            <div className="flex gap-4 justify-center">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material/24/wifi-off.png"
                alt="wifi-off"
              />
              <p className="text-center text-xl font-bold text-gray-500">
                You're offline.
              </p>
            </div>
            <p className="text-center text-sm text-gray-500">
              Please check your internet connection.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
