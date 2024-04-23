import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GETEPISODEPROGRESS } from "../data/query";
import { AuthContext } from "../../../../context/AuthContext";
import { useParams } from "react-router-dom";
import { CREATEEPISODEPROGRESS, UPDATEEPISODEPROGRESS } from "../data/mutation";

export const EpisodeProgress = ({ videoEnd }) => {
  const { episode_id } = useParams();
  const { userId } = useContext(AuthContext);

  const [createProgress] = useMutation(CREATEEPISODEPROGRESS);
  const [updateProgress] = useMutation(UPDATEEPISODEPROGRESS);
  const { data, loading } = useQuery(GETEPISODEPROGRESS, {
    variables: {
      userId: userId,
      episodeId: episode_id,
    },
  });

  useEffect(() => {
    if (data?.course_progress?.length === 0) {
      createProgress({
        variables: {
          episodeId: episode_id,
          userId: userId,
          courseStarted: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (data?.course_progress?.length !== 0 && videoEnd) {
      updateProgress({
        variables: {
          progressId: data?.course_progress[0]?.id,
          courseFinished: true,
        },
      });
    }
  }, [videoEnd]);

  return;
};
