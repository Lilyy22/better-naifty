import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../context/AuthContext";
import { GETUSERDISCUSSION } from "../pages/dashboard/forum/data/query";

export const useUserForum = (topicId) => {
  const { userId } = useContext(AuthContext);
  const [userForum, setUserForum] = useState(false);

  const { data, loading } = useQuery(GETUSERDISCUSSION, {
    variables: { topicId: topicId },
  });

  useEffect(() => {
    const user = data?.discussion_topic[0]?.user?.id;
    if (user === userId) {
      setUserForum(true);
    } else {
      setUserForum(false);
    }
  }, [data]);

  return { userForum, loading };
};
