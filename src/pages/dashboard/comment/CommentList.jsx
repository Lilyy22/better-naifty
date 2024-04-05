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
      <p className="mb-4 text-sm">
        <span className="font-medium mb-4">
          {dataCount?.comment_aggregate?.count}{" "}
        </span>
        Comments
      </p>

      {data?.comment?.map(({ id, comment, updated_at, user }) => {
        return (
          <ul
            aria-label="User comment"
            role="comment"
            className="relative flex flex-col py-6 pl-4 before:absolute before:top-0 before:h-full before:-translate-x-1/2 before:border before:border-dashed after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2"
          >
            <CommentCard
              key={id}
              photo={user?.studentprofile?.profile_picture}
              name={`${user?.studentprofile?.first_name} ${user?.studentprofile?.last_name}`}
              comment={comment}
              updated_at={updated_at}
            />
          </ul>
        );
      })}
    </div>
  );
};

export default CommentList;
