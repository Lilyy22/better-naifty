import { useContext, useState } from "react";
import { DashForm } from "../../../components/form/Form";
import { CREATESTUDENTPROFILE, UPDATESTUDENTPROFILE } from "./data/mutation";
import { AuthContext } from "../../../context/AuthContext";
import { FileUpload, Input, Textarea } from "../../../components/form/Input";
import { useMutation } from "@apollo/client";
import { PrimaryButton } from "../../../components/Button";
import { fileUpload } from "../../../axios/mutation";

export const ProfileForm = ({
  is_create,
  bio,
  firstName,
  lastName,
  profilePicture,
}) => {
  const { userId } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [profileImage, setProfileImage] = useState(profilePicture);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const filePath = await fileUpload("PROFILE_PICTURE", profileImage);
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
      // if(!error)
    } catch (error) {}
  };
  return (
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

        <FileUpload
          id="profile"
          label="Profile"
          onChange={handleProfileImage}
          isRequired={profilePicture ? false : true}
          thumbnail={profileImage}
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
  );
};
