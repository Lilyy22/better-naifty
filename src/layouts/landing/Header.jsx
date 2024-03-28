import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { LandPrimaryButton } from "../../components/Button";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <header className="bg-transparent backdrop-blur py-4 fixed top-0 w-full xl:px-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between relative px-2">
          <Logo />
          <nav className={`my-auto ${menuToggle ? "" : "hidden md:block "}`}>
            <ul
              className={`flex font-medium md:flex-row md:justify-evenly md:text-custom-white-100 md:gap-6 md:relative md:bg-transparent md:top-0 md:z-0 md:text-left ${
                menuToggle
                  ? "flex-col justify-center gap-2 absolute top-14 w-full left-0 bg-gray-50/95 backdrop-blur text-center px-3 py-4 z-10 rounded"
                  : ""
              }`}
            >
              <li
                className="py-1 md:py-0"
                onClick={() => {
                  setMenuToggle(!menuToggle);
                }}
              >
                <NavLink
                  to="/course"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-400"
                      : "" + "hover:text-gray-400 transition-all"
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li
                className="py-1 md:py-0"
                onClick={() => {
                  setMenuToggle(!menuToggle);
                }}
              >
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-400"
                      : "" + "hover:text-gray-400 transition-all"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li
                className="py-1 md:py-0"
                onClick={() => {
                  setMenuToggle(!menuToggle);
                }}
              >
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-400"
                      : "" + "hover:text-gray-400 transition-all"
                  }
                >
                  About us
                </NavLink>
              </li>
              <NavLink
                to="/login"
                className="px-4 py-1 hover:text-gray-400 transition-all md:hidden"
              >
                <span>Log In</span>
              </NavLink>
              {/* <li className="py-1 md:py-0">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-gray-400" : "" + "hover:text-gray-400"
                  }
                >
                  <div className="flex gap-2 justify-center">
                    <span>Services</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      width="12"
                      viewBox="0 0 512 512"
                      className="my-auto fill-current"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </div>
                </NavLink>
              </li> */}
            </ul>
          </nav>
          <div className="my-auto flex gap-2 md:gap-4">
            {/* dropdown */}
            <div class="mx-auto flex w-full gap-2 items-center justify-center">
              <NavLink
                to="/login"
                className="text-white px-4 py-1 hidden md:block"
              >
                <span>Log In</span>
              </NavLink>
              <div class="group relative cursor-pointer py-2">
                <LandPrimaryButton type="button" text="Sign Up">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 512 512"
                  >
                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                </LandPrimaryButton>
                <div class="invisible absolute z-50 flex w-full flex-col bg-custom-gray-900 rounded-lg mt-1 py-1 text-gray-800 shadow-xl group-hover:visible">
                  <Link
                    to="/signup"
                    class="my-2 block p-2 font-semibold text-gray-500 text-sm hover:bg-custom-black-600 hover:text-custom-white-100 md:mx-2"
                  >
                    As Student
                  </Link>
                  <Link
                    to="/signup/instructor"
                    class="my-2 block p-2 font-semibold text-gray-500 text-sm hover:bg-custom-black-600 hover:text-custom-white-100 md:mx-2"
                  >
                    As Instructor
                  </Link>
                </div>
              </div>
            </div>
            <span
              onClick={() => {
                setMenuToggle(!menuToggle);
              }}
              className="md:hidden my-auto cursor-pointer"
            >
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.45em"
                  viewBox="0 0 384 512"
                  className="fill-white"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.45em"
                  viewBox="0 0 448 512"
                  className="fill-white"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              )}
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
