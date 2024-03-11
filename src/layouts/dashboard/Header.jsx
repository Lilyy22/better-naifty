import React, { useContext } from "react";
import { Logo } from "../../components/Logo";
import { AuthContext } from "../../context/AuthContext";
import { Profile } from "../../components/Profile";

export const Header = ({ handleClick }) => {
  const { isInstructor, userEmail } = useContext(AuthContext);

  return (
    <>
      {/* Start::Header */}
      <header className="font-naifty flex justify-between bg-white sticky top-0 z-50 border-b">
        <button
          type="button"
          className="md:px-[0.325rem]"
          onClick={handleClick}
        >
          {/* Start::header-link */}
          <svg
            className="w-6 h-5 fill-current mx-2"
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
        <div className="main-header !h-[3.75rem]" aria-label="Global">
          <div className="header-content-right">
            <div className="group header-element md:!px-[0.65rem] px-2 !items-center relative">
              <Profile
                name={
                  isInstructor === "true" || isInstructor === true
                    ? "Instructor"
                    : "Student"
                }
                subText={userEmail ?? "gelilahhamid2gmail.com"}
                photo="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
              />
            </div>
          </div>
        </div>
      </header>
      {/* End::Header */}
    </>
  );
};
