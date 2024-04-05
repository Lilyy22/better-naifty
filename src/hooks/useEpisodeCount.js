import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GETEPISODECOUNT } from "../pages/dashboard/episode/data/query";

export const useEpisodeCount = (sectionId) => {
  const [episodeCount, setEpisodeCount] = useState();

  const { data } = useQuery(GETEPISODECOUNT, {
    variables: { sectionId: sectionId },
  });

  useEffect(() => {
    setEpisodeCount(data?.curse_episode_aggregate?.count);
  }, [data]);

  return episodeCount;
};
