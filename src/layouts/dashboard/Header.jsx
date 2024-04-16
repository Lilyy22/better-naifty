import React, { useContext } from "react";
import { Logo } from "../../components/Logo";
import { AuthContext } from "../../context/AuthContext";
import { Profile } from "../../components/Profile";
import { useProfilePicture } from "../../hooks/useProfilePicture";
import { trimText } from "../../utils/trimText";
import { useRole } from "../../hooks/useRole";

export const Header = ({ handleClick, sidebarOpen }) => {
  const { userEmail } = useContext(AuthContext);
  const { userRole } = useRole();
  const { profilePicture, loading } = useProfilePicture();

  return (
    <>
      {/* Start::Header */}
      <header className="font-naifty flex justify-between bg-custom-purple-900 md:bg-white sticky top-0 z-40">
        <button
          type="button"
          className="md:px-[0.325rem] z-40"
          onClick={handleClick}
        >
          {/* Start::header-link */}
          {sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-7 h-6 fill-gray-400 md:fill-current mx-2 md:hidden"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-5 fill-gray-400 md:fill-current mx-2 md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          )}
          {/* End::header-link */}
        </button>
        <div className="md:hidden my-auto">
          <Logo />
        </div>
        <div className="group relative">
          <Profile
            name={userRole}
            subText={trimText(userEmail, 30)}
            photo={
              profilePicture
                ? `https://api.naifty.academy/media/${profilePicture}`
                : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            }
            loading={loading}
          />
          <div className="hidden group-hover:block md:group-hover:hidden absolute right-1 bg-white rounded-md p-4">
            <div>
              <p className="block text-gray-600 leading-tighter mb-0 font-semibold text-sm">
                {userRole}
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
