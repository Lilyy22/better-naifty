import React from "react";
import { motion } from "framer-motion";
import { Slider } from "./Slider";
import { Outlet, useLocation } from "react-router-dom";
import { H2, H4, Subtitle } from "../../../../components/Heading";
import { Logo } from "../../../../components/Logo";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="w-full flex justify-center items-center h-screen bg-gray-900">
        <div className="flex bg-gray-900 border-gray-800 m-auto rounded-xl lg:w-[70%] md:border">
          <div className="w-full py-8 md:py-10 xl:py-16 lg:w-1/2 lg:my-auto">
            <Logo customStyle="mx-auto lg:w-20 mb-4" />
            <li className="text-center p-2 m-4 rounded-md bg-custom-purple-900 lg:hidden">
              <H4
                text={
                  currentPath === "/signup/instructor"
                    ? "Join Our Team of Educators."
                    : "Unlock Your Potential with NAIFTY"
                }
              />
              <Subtitle
                text={
                  currentPath === "/signup/instructor"
                    ? "Teach and transform lives, get instant access to our community and students."
                    : "Discover interactive courses and gain practical skills to excel in the real world."
                }
              />
            </li>
            <Outlet />
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
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
