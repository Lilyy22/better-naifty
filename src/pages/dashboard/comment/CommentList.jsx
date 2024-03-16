import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GETCOMMENT, GETCOMMENTCOUNT } from "./data/query";
import { CommentCard } from "./component/Card";

const CommentList = ({ commented, episodeId }) => {
  const { data, loading, refetch } = useQuery(GETCOMMENT, {
    variables: {
      episodeId: episodeId,
    },
  });

  const {
    data: dataCount,
    loading: countLoading,
    refetch: refetchCount,
  } = useQuery(GETCOMMENTCOUNT, {
    variables: {
      episodeId: episodeId,
    },
  });

  useEffect(() => {
    refetch();
    refetchCount();
  }, [commented]);

  return (
    <div>
      {loading && <span>Loading ....</span>}
      <p className="text-sm font-medium">
        {dataCount?.comment_aggregate?.count} Comments
      </p>

      {data?.comment?.map(({ id, comment, updated_at, user }) => {
        return (
          <CommentCard
            key={id}
            photo={user?.studentprofile?.profile_picture}
            name={`${user?.studentprofile?.first_name} ${user?.studentprofile?.last_name}`}
            comment={comment}
            updated_at={updated_at}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
