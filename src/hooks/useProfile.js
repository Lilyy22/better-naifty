import { useContext, useEffect, useState } from "react";
import { GETSTUDENTPROFILE } from "../pages/dashboard/profile/data/query";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../context/AuthContext";

export const useProfile = () => {
  const { userId } = useContext(AuthContext);
  const [profile, setProfile] = useState();

  const { data, loading } = useQuery(GETSTUDENTPROFILE, {
    variables: { userId: userId },
  });

  useEffect(() => {
    const pp = data?.student_profile.length;
    setProfile(pp);
  }, [data]);

  return { profile, loading };
};
