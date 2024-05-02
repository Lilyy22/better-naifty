import { useContext } from "react";
import { GETEPISODEPROGRESS } from "../pages/dashboard/episode/data/query";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../context/AuthContext";

export const useEpisodeProgress = (episodeId) => {
  const { userId } = useContext(AuthContext);

  const { data, loading } = useQuery(GETEPISODEPROGRESS, {
    variables: {
      userId: userId,
      episodeId: episodeId,
    },
  });

  return { data, loading };
};
