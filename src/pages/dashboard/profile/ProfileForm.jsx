import { useContext, useState } from "react";
import { DashForm } from "../../../components/form/Form";
import { CREATESTUDENTPROFILE, UPDATESTUDENTPROFILE } from "./data/mutation";
import { AuthContext } from "../../../context/AuthContext";
import { Input, Textarea } from "../../../components/form/Input";
import { useMutation } from "@apollo/client";
import { PrimaryButton } from "../../../components/Button";
import { fileUpload } from "../../../axios/mutation";
import { Toast } from "../../../components/Toast";
import Breadcrumb from "../../../components/Breadcrumb";

export const ProfileForm = ({
  is_create,
  bio,
  firstName,
  lastName,
  profilePicture,
}) => {
  const breadcrumbs = [
    {
      name: "Profile",
      path: "/dashboard/profile",
    },
    {
      name: "Update",
      path: "",
    },
  ];
  const { userId } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [profileImage, setProfileImage] = useState(profilePicture);
  const [selectedFile, setSelectedFile] = useState();
  const [data, setData] = useState({
    firstName: firstName,
    lastName: lastName,
    bio: bio,
  });

  const [profile] = useMutation(
    is_create ? CREATESTUDENTPROFILE : UPDATESTUDENTPROFILE
  );

  const handleProfileImage = (e) => {
    setProfileImage(e.target.files[0]);
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let filePath;
      if (selectedFile && profileImage) {
        filePath = await fileUpload("PROFILE_PICTURE", profileImage);
      }
      await profile({
        variables: {
          userId: userId,
          firstName: data.firstName,
          lastName: data.lastName,
          bio: data.bio,
          profilePicture: profileImage ? filePath : profilePicture,
        },
      });
      setLoading(false);
      setClose(false);
      setStatus({
        ...status,
        success: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      setClose(false); // set close false incase toast is closed
      setStatus({
        success: false,
        error: true,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };

  return (
    <>
      {status.success && (
        <Toast
          text={`Profile Successfully ${is_create ? "created" : "updated"}!`}
          isSuccess={true}
          close={close}
          setClose={setClose}
        />
      )}
      {status.error && (
        <Toast
          text={status.errorContent ?? "Something went wrong!"}
          isSuccess={false}
          close={close}
          setClose={setClose}
        />
      )}

      {!is_create && (
        <Breadcrumb
          breadcrumbs={breadcrumbs}
          handleClick={() => window.location.reload()}
        />
      )}

      <DashForm title="Profile Form">
        <form className="pt-4" onSubmit={handleSubmit}>
          <label
            htmlFor="profilePicture"
            className="inline-block mb-2 text-xs font-semibold tracking-wide"
          >
            Profile Picture
          </label>
          <span className="text-red-500 pl-1 text-sm">*</span>
          <div className="mb-6 relative border w-36 h-36 rounded-full cursor-pointer mx-auto md:mx-0">
            {profilePicture && !selectedFile ? (
              <img
                src={`https://api.naifty.academy/media/${profilePicture}`}
                className="cursor-pointer w-full h-full object-cover object-center rounded-full"
                alt="profile"
              />
            ) : (
              <img
                src={
                  selectedFile
                    ? selectedFile
                    : require("../../../assets/male-avatar.webp")
                }
                className="cursor-pointer w-full h-full object-cover object-center rounded-full"
                alt="male avatar"
              />
            )}

            <input
              type="file"
              name="profilePicture"
              id="profilePicture"
              className="z-10 absolute w-full h-full rounded-full border p-6 top-0 left-0 opacity-0 cursor-pointer"
              onChange={handleProfileImage}
              required={profilePicture ? false : true}
            />
          </div>
          <Input
            id="firstname"
            label="First Name"
            type="text"
            placeholder="eg: John"
            value={data.firstName}
            onChange={(e) => {
              setData({ ...data, firstName: e.target.value });
            }}
            isRequired={true}
          />
          <Input
            id="lastname"
            label="Last Name"
            type="text"
            placeholder="eg: Doe"
            value={data.lastName}
            onChange={(e) => {
              setData({ ...data, lastName: e.target.value });
            }}
            isRequired={true}
          />

          <Textarea
            id="Description"
            label="About Yourself"
            placeholder="eg: Your description here"
            value={data.bio}
            onChange={(e) => {
              setData({ ...data, bio: e.target.value });
            }}
            isRequired={true}
          />
          <PrimaryButton
            text={loading ? "•••" : "Submit"}
            isDisabled={loading ? true : false}
          />
        </form>
      </DashForm>
    </>
  );
};
