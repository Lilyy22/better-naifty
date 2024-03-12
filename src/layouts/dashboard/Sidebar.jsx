import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { AuthContext } from "../../context/AuthContext";

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { isInstructor } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <motion.aside
        initial={{ width: 0 }}
        animate={{ width: 270 }}
        transition={{
          duration: 1,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
        className={`z-50 flex-shrink-0 w-64 overflow-y-auto bg-custom-purple-900 h-full font-mont fixed md:static ${
          sidebarOpen ? "block" : "hidden md:block"
        }`}
      >
        <motion.div className="text-gray-500 font-naifty">
          <div className="pl-8 py-4 border-b border-gray-700">
            <Logo />
            <button
              className="md:hidden absolute top-4 right-4"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 fill-red-200 hover:fill-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-column text-white my-4">
            <ul className="m-0">
              {/* Start::slide */}
              <Title text="Main" />
              <Li text="Dashboard" path="/dashboard/chart">
                <svg
                  className="w-[14px] h-4 fill-custom-white-200 group-hover:fill-white mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </Li>

              <Title text="Pages" />
              {isInstructor === "true" || isInstructor === true ? (
                <>
                  <div className="m-0 py-0 px-3 grid cursor-pointer">
                    <li
                      className="p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <svg
                        className="w-[14px] h-4 fill-custom-white-200 mx-2 group-hover:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                      </svg>
                      <span className="whitespace-nowrap text-custom-white-200 relative text-[0.85rem] leading-none align-middle">
                        Manage Course
                      </span>
                      <svg
                        className="w-[0.4rem] fill-custom-white-200 rtl:rotate-180 origin-center absolute end-3 text-[0.85rem] text-custom-white-200 transition-all ease-linear duration-[0.05s] my-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                      </svg>
                    </li>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{
                            duration: 0.8,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }}
                          className="py-[0.45rem] px-[1.6rem]"
                        >
                          <li className="m-0 py-0 px-3">
                            <NavLink
                              to="/dashboard/course-list"
                              className={({ isActive }) =>
                                isActive
                                  ? "p-3 relative flex items-center no-underline text-[0.78rem] text-white font-medium rounded-md mb-2 bg-white/[0.07]"
                                  : "p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md  group-hover:bg-white/[0.07]"
                              }
                            >
                              Course
                            </NavLink>
                          </li>
                          <li className="m-0 py-0 px-3">
                            <NavLink
                              to="/dashboard/section-list"
                              className={({ isActive }) =>
                                isActive
                                  ? "rounded-md p-3 relative flex items-center no-underline text-[0.78rem] text-white font-medium bg-white/[0.07]"
                                  : "p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md  group-hover:bg-white/[0.07]"
                              }
                            >
                              Section
                            </NavLink>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                  <li className="m-0 py-0 px-3 has-sub">
                    <div className="p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md">
                      <svg
                        className="w-[14px] h-4 fill-custom-white-200 mx-2 group-hover:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" />
                      </svg>
                      <span className="whitespace-nowrap text-custom-white-200 relative text-[0.85rem] leading-none align-middle">
                        Manage Assessment
                      </span>
                      <i className="fe fe-chevron-right  origin-center absolute end-3 text-[0.85rem] text-custom-white-200 transition-all ease-linear duration-[0.05s]" />
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <DropDown />
                  <Li text="Assessment" path="assessment">
                    <svg
                      className="w-[14px] h-4 fill-custom-white-200 mx-2 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" />
                    </svg>
                  </Li>
                </>
              )}

              <Title text="General" />
              <Li text="Profile" path="/dashboard/profile">
                <svg
                  className="w-[14px] h-4 fill-custom-white-200 mx-2 group-hover:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" />
                </svg>
              </Li>
              <li className="m-0 py-0 px-3 grid group">
                <button
                  className="w-full p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md hover:bg-white/[0.07]"
                  onClick={handleLogout}
                >
                  <svg
                    className="fill-current w-3 h-4 mx-2 my-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                  </svg>

                  <span className="whitespace-nowrap group-hover:text-white relative text-[0.85rem] leading-none align-middle">
                    Log Out
                  </span>
                </button>
              </li>
              {/* END:: slide */}
            </ul>
          </nav>
        </motion.div>
      </motion.aside>
    </>
  );
};

const Li = ({ text, children, path }) => {
  return (
    <li className="m-0 py-0 px-3 grid group">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "p-3 relative flex items-center no-underline text-[0.78rem] text-white font-medium rounded-md bg-white/[0.07]"
            : "p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md group-hover:bg-white/[0.07]"
        }
      >
        {children}
        <span className="whitespace-nowrap group-hover:text-white relative text-[0.85rem] leading-none align-middle">
          {text}
        </span>
      </NavLink>
    </li>
  );
};

const Title = ({ text }) => {
  return (
    <li className="text-[0.6rem] font-semibold tracking-[0.065rem] uppercase py-3 px-[1.65rem] whitespace-nowrap opacity-50 relative text-custom-white-200">
      <span className="category-name">{text}</span>
    </li>
  );
};

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-0 py-0 px-3 grid cursor-pointer">
      <li
        className="p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <svg
          className="w-[14px] h-4 fill-custom-white-200 mx-2 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
        </svg>
        <span className="whitespace-nowrap text-custom-white-200 relative text-[0.85rem] leading-none align-middle">
          Courses
        </span>
        <svg
          className="w-[0.4rem] fill-custom-white-200 rtl:rotate-180 origin-center absolute end-3 text-[0.85rem] text-custom-white-200 transition-all ease-linear duration-[0.05s] my-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </li>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="py-[0.45rem] px-[1.6rem]"
          >
            <li className="m-0 py-0 px-3">
              <NavLink
                to="/dashboard/courses"
                className={({ isActive }) =>
                  isActive
                    ? "p-3 relative flex items-center no-underline text-[0.78rem] text-white font-medium rounded-md mb-2 bg-white/[0.07]"
                    : "p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md  group-hover:bg-white/[0.07]"
                }
              >
                Courses
              </NavLink>
            </li>
            <li className="m-0 py-0 px-3">
              <NavLink
                to="/dashboard/enrolled-courses"
                className={({ isActive }) =>
                  isActive
                    ? "rounded-md p-3 relative flex items-center no-underline text-[0.78rem] text-white font-medium bg-white/[0.07]"
                    : "p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md  group-hover:bg-white/[0.07]"
                }
              >
                Enrolled courses
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
