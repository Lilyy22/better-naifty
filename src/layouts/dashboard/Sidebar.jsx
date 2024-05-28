import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { useRole } from "../../hooks/useRole";
import { AuthContext } from "../../context/AuthContext";

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const { setAccessToken } = useContext(AuthContext);
  const { isAInstructor, isAdmin, isAStudent } = useRole();

  const handleLogout = () => {
    localStorage.clear();
    setAccessToken(null);
    navigate("/login");
  };

  return (
    <aside
      className={`z-40 flex-shrink-0 w-full overflow-y-auto bg-custom-purple-900 h-full font-mont fixed md:static md:block md:w-60 ${
        sidebarOpen ? "block" : "hidden "
      }`}
    >
      <motion.div className="text-gray-500 font-mont">
        <div className="pl-8 py-4 border-b border-gray-700">
          <Logo noLink={true} />
        </div>

        <nav className="flex-column text-white my-4">
          <ul className="m-0">
            {/* Start::slide */}
            <Title text="Main" />
            <Li
              handleClick={() => setSidebarOpen(!sidebarOpen)}
              text="Dashboard"
              path="/dashboard/"
            >
              <svg
                className="w-[14px] h-4 fill-custom-white-200 group-hover:fill-white mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </Li>

            <Title text="Pages" />
            {isAInstructor && (
              <>
                <Li
                  handleClick={() => setSidebarOpen(!sidebarOpen)}
                  text="Manage Course"
                  path="/dashboard/course-list"
                >
                  <svg
                    className="w-[14px] h-4 fill-custom-white-200 mx-2 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z" />
                  </svg>
                </Li>
                {/* <DropDown
                  menu="Manage Course"
                  handleClick={() => setSidebarOpen(!sidebarOpen)}
                  submenu={[
                    {
                      id: 1,
                      title: "Course",
                      pathname: "/dashboard/course-list",
                    },
                    {
                      id: 2,
                      title: "Section",
                      pathname: "/dashboard/section-list",
                    },
                  ]}
                /> */}
              </>
            )}

            {isAStudent && (
              <>
                <DropDown
                  menu="Course"
                  handleClick={() => setSidebarOpen(!sidebarOpen)}
                  submenu={[
                    {
                      id: 1,
                      title: "Courses",
                      pathname: "/dashboard/courses",
                    },
                    {
                      id: 2,
                      title: "Enrolled Courses",
                      pathname: "/dashboard/enrolled-courses",
                    },
                  ]}
                />
              </>
            )}

            {isAdmin && (
              <>
                <DropDown
                  menu="Courses"
                  handleClick={() => setSidebarOpen(!sidebarOpen)}
                  submenu={[
                    {
                      id: 1,
                      title: "All Courses",
                      pathname: "/dashboard/all-courses",
                    },
                    {
                      id: 2,
                      title: "Approved Courses",
                      pathname: "/dashboard/approved-courses",
                    },
                  ]}
                />
                <DropDown
                  menu="Users"
                  handleClick={() => setSidebarOpen(!sidebarOpen)}
                  icon={
                    <svg
                      className="w-[14px] h-4 fill-custom-white-200 mx-2 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                    </svg>
                  }
                  submenu={[
                    {
                      id: 1,
                      title: "Admin",
                      pathname: "/dashboard/administrators",
                    },
                    {
                      id: 2,
                      title: "Students",
                      pathname: "/dashboard/student-users",
                    },
                    {
                      id: 3,
                      title: "Instructors",
                      pathname: "/dashboard/instructor-users",
                    },
                  ]}
                />
                <Li
                  handleClick={() => setSidebarOpen(!sidebarOpen)}
                  text="Category"
                  path="/dashboard/categories"
                >
                  <svg
                    className="w-[14px] h-3 fill-custom-white-200 mx-2 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z" />
                  </svg>
                </Li>
              </>
            )}

            <Title text="General" />
            <Li
              handleClick={() => setSidebarOpen(!sidebarOpen)}
              text="Profile"
              path="/dashboard/profile"
            >
              <svg
                className="w-[14px] h-4 fill-custom-white-200 mx-2 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" />
              </svg>
            </Li>

            <li
              handleClick={() => setSidebarOpen(!sidebarOpen)}
              className="m-0 py-0 px-3 grid group"
            >
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
    </aside>
  );
};

const Li = ({ text, children, path, handleClick }) => {
  return (
    <li className="m-0 py-0 px-3 grid group" onClick={handleClick}>
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

const DropDown = ({ menu, submenu, handleClick, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="m-0 py-0 px-3 grid cursor-pointer">
      <li
        className="p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {icon ? (
          icon
        ) : (
          <svg
            className="w-[14px] h-4 fill-custom-white-200 mx-2 group-hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
        )}
        <span className="whitespace-nowrap text-custom-white-200 relative text-[0.85rem] leading-none align-middle">
          {menu}
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
            {submenu?.map(({ id, title, pathname }) => {
              return (
                <li className="m-0 py-0 px-3" key={id} onClick={handleClick}>
                  <NavLink
                    to={pathname}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md p-3 relative flex items-center no-underline text-[0.78rem] text-white font-medium bg-white/[0.07] whitespace-nowrap"
                        : "p-3 relative flex items-center no-underline text-[0.78rem] text-custom-white-200 font-medium rounded-md  group-hover:bg-white/[0.07] whitespace-nowrap"
                    }
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
