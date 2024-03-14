import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GETCOMMENT } from "./data/query";
import { CommentCard } from "./component/Card";

const CommentList = ({ commented, episodeId }) => {
  const { data, loading, refetch } = useQuery(GETCOMMENT, {
    variables: {
      episodeId: episodeId,
    },
  });

  useEffect(() => {
    refetch();
  }, [commented]);

  return (
    <div>
      {data?.comment?.map(({ id, comment, updated_at, user }) => {
        return (
          <CommentCard
            key={id}
            photo={user?.studentprofile?.profile_picture}
            name={`${user?.studentprofile?.first_name}``${user?.studentprofile?.first_name}`}
            comment={comment}
            updated_at={updated_at}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
