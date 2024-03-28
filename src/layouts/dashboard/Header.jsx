import React, { useContext } from "react";
import { Logo } from "../../components/Logo";
import { AuthContext } from "../../context/AuthContext";
import { Profile } from "../../components/Profile";

export const Header = ({ handleClick }) => {
  const { isInstructor, userEmail, isSuperUser } = useContext(AuthContext);

  let name;
  if (isInstructor === "true" || isInstructor === true) {
    name = "Instructor";
  } else if (
    (isInstructor === "false" || isInstructor === false) &&
    (isSuperUser === "false" || isSuperUser === false || isSuperUser === null)
  ) {
    name = "Student";
  } else {
    name = "Admin";
  }

  return (
    <>
      {/* Start::Header */}
      <header className="font-naifty flex justify-between bg-gray-800 md:bg-white sticky top-0 z-40 border-b">
        <button
          type="button"
          className="md:px-[0.325rem]"
          onClick={handleClick}
        >
          {/* Start::header-link */}
          <svg
            className="w-6 h-5 fill-gray-400 md:fill-current mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
          {/* End::header-link */}
        </button>
        <div className="md:hidden my-auto">
          <Logo />
        </div>
        <div className="group relative">
          <Profile
            name={name}
            subText={userEmail}
            photo="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          />
          <div className="hidden group-hover:block absolute right-1 bg-white rounded-md p-4">
            <div>
              <p className="block text-gray-600 leading-tighter mb-0 font-semibold text-sm">
                {name}
              </p>
              <p className="text-[11.5px] text-gray-400 tracking-loose leading-none">
                {userEmail}
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* End::Header */}
    </>
  );
};
