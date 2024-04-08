import { useContext, useEffect, useState } from "react";
import { GETSTUDENTPROFILE } from "../pages/dashboard/profile/data/query";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../context/AuthContext";

export const useProfilePicture = () => {
  const { userId } = useContext(AuthContext);
  const [profilePicture, setProfilePicture] = useState();

  const { data, loading } = useQuery(GETSTUDENTPROFILE, {
    variables: { userId: userId },
  });

  useEffect(() => {
    setProfilePicture(data?.student_profile[0]?.profile_picture);
  }, [data]);

  return { profilePicture, loading };
};
