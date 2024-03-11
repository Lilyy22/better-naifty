import { useContext, useState } from "react";
import { DashForm } from "../../../components/form/Form";
import { CREATESTUDENTPROFILE, UPDATESTUDENTPROFILE } from "./data/mutation";
import { AuthContext } from "../../../context/AuthContext";
import { FileUpload, Input, Textarea } from "../../../components/form/Input";
import { useMutation } from "@apollo/client";
import { PrimaryButton } from "../../../components/Button";
import { fileUpload } from "../../../axios/mutation";
import { Toast } from "../../../components/Toast";

export const ProfileForm = ({
  is_create,
  bio,
  firstName,
  lastName,
  profilePicture,
}) => {
  const { userId } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [profileImage, setProfileImage] = useState(profilePicture);
  const [selectedFile, setSelectedFile] = useState();
  const [data, setData] = useState({
    firstName: firstName,
    lastName: lastName,
    bio: bio,
  });

  const [profile, {}] = useMutation(
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
      const { error } = await profile({
        variables: {
          userId: userId,
          firstName: data.firstName,
          lastName: data.lastName,
          bio: data.bio,
          profilePicture: profileImage ? filePath : profilePicture,
        },
      });
      setLoading(false);
      if (!error) {
        setSuccess(true);
        window.location.reload();
      }
    } catch (error) {}
  };
  return (
    <>
      {success && (
        <Toast
          text="Your Profile data is submitted successfully."
          isSuccess={true}
        />
      )}
      <DashForm title="Profile Form">
        <form className="p-6" onSubmit={handleSubmit}>
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
                src={`https://naifty.abelayalew.dev/media/${profilePicture}`}
                className="cursor-pointer w-full h-full object-cover object-center rounded-full"
                alt="profile picture"
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
          {/* <FileUpload
            id="profile"
            label="Profile"
            onChange={handleProfileImage}
            isRequired={profilePicture ? false : true}
            thumbnail={profileImage}
          /> */}
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
