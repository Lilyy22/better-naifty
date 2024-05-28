import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GETSTUDENTPROFILE } from "./data/query";
import { ProfileLoader } from "./component/Loader";
import { formattedDate } from "../../../utils/formattedDate";
import { AuthContext } from "../../../context/AuthContext";
import { ProfileForm } from "./ProfileForm";
import { SecondaryButton } from "../../../components/Button";
import { ChangePassword } from "../auth/ChangePassword";

export const Profile = () => {
  const [openTab, setOpenTab] = useState(1);

  const { userId } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);
  const [is_create, setIsCreate] = useState(true);
  const [profile, setProfile] = useState({
    bio: "",
    firstName: "",
    lastName: "",
    profilePicture: "",
  });

  const { data, loading } = useQuery(GETSTUDENTPROFILE, {
    variables: { userId: userId },
  });

  const handleProfileEdit = () => {
    setIsCreate(false);
    setProfile({
      ...profile,
      bio: data?.student_profile[0]?.bio,
      firstName: data?.student_profile[0]?.first_name,
      lastName: data?.student_profile[0]?.last_name,
      profilePicture: data?.student_profile[0]?.profile_picture,
    });
  };

  return (
    <>
      <div className="bg-white rounded-xl">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 pl-2 border-b">
          <li className="me-2 outline-none" role="presentation">
            <button
              className={`inline-block p-2 md:p-4 rounded-t-lg ${
                openTab === 1 ? "text-blue-700 border-b border-blue-700" : ""
              }`}
              onClick={() => setOpenTab(1)}
            >
              Profile
            </button>
          </li>
          <li className="me-2 outline-none" role="presentation">
            <button
              className={`inline-block p-2 md:p-4 rounded-t-lg ${
                openTab === 2 ? "text-blue-700 border-b border-blue-700" : ""
              }`}
              onClick={() => setOpenTab(2)}
            >
              Account Settings
            </button>
          </li>
        </ul>

        <div className={`p-6 xl:w-[70%] ${openTab === 1 ? "block" : "hidden"}`}>
          {loading && <ProfileLoader />}
          {data?.student_profile?.length !== 0 && is_create ? (
            <div>
              {data?.student_profile?.map(
                ({
                  id,
                  first_name,
                  last_name,
                  bio,
                  profile_picture,
                  user,
                  updated_at,
                }) => (
                  <div
                    className="rounded-xl shadow bg-white font-mont"
                    key={id}
                  >
                    <div
                      className="flex items-start p-6 rounded-t-xl bg-no-repeat bg-cover bg-gray-800/80 bg-blend-overlay"
                      style={{
                        backgroundImage: `url(https://img.freepik.com/free-vector/groovy-psychedelic-hand-drawn-background_23-2149086296.jpg)`,
                      }}
                    >
                      <div className="w-full flex flex-wrap justify-between">
                        <div className="w-32 h-32 -mb-10 ml-4">
                          <img
                            className="object-center object-cover rounded-full w-full h-full border"
                            src={`https://api.naifty.academy/media/${profile_picture}`}
                            alt="Profile Picture"
                          />
                        </div>
                        <SecondaryButton
                          handleClick={handleProfileEdit}
                          text="Edit"
                        >
                          <svg
                            className="w-3 h-3 fill-current my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                          </svg>
                        </SecondaryButton>
                      </div>
                    </div>
                    <div className="w-full flex flex-wrap md:gap-2">
                      <div className="text-center px-6 py-6">
                        <h6 className="font-semibold text-base">
                          {first_name} {last_name}
                        </h6>
                        <p className="mb-1 text-xs text-purple-400/90">
                          {user.is_instructor ? "Instructor" : "Student"}{" "}
                          @Naifty
                        </p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                      <div className="bg-purple-50/60 p-6 rounded-bl md:flex-1 border-t">
                        <p className="text-base mb-2 font-semibold text-gray-500">
                          Professional Bio
                        </p>
                        <p className="text-[0.8rem] text-gray-800 opacity-[0.7] mb-0">
                          {bio}
                        </p>
                      </div>
                    </div>
                    <span className="text-right block text-gray-400 px-6 py-4 text-xs">
                      Last updated:{" "}
                      <span className="text-gray-500">
                        {formattedDate(updated_at)}
                      </span>
                    </span>
                  </div>
                )
              )}
            </div>
          ) : (
            <ProfileForm
              is_create={is_create}
              bio={profile.bio}
              firstName={profile.firstName}
              lastName={profile.lastName}
              profilePicture={profile.profilePicture}
            />
          )}
        </div>

        <div className={`p-4 mt-4 ${openTab === 2 ? "block" : "hidden"}`}>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Settings</h3>
            <p className="mb-2 text-sm">
              Manage your account and set preferences.
            </p>
            <div className="mt-4">
              <SecondaryButton
                handleClick={() => setOpenModal(!openModal)}
                text="Change Password"
              />
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <ChangePassword handleOpen={() => setOpenModal(!openModal)} />
      )}
    </>
  );
};
