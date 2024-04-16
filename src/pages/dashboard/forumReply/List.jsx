import { useQuery } from "@apollo/client";
import React from "react";
import { GETTOPICREPLY } from "./data/query";
import { CommentCard } from "../comment/component/Card";
import { Loader } from "../comment/component/Loader";

export const List = ({ forumId }) => {
  const { data, loading } = useQuery(GETTOPICREPLY, {
    variables: {
      forumId: forumId,
    },
  });

  return (
    data && (
      <div>
        {!loading && (
          <p className="text-xs text-gray-500 pl-1 font-medium">
            {data?.discussion_comment?.length} comments
          </p>
        )}
        <div className="my-4 p-2">
          {data?.discussion_comment?.map(
            ({ id, reply_text, updated_at, user }) => {
              return (
                <ul
                  key={id}
                  aria-label="User comment"
                  role="comment"
                  className="relative flex flex-col py-6 pl-4 before:absolute before:top-0 before:h-full before:-translate-x-1/2 before:border before:border-dashed after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2"
                >
                  <CommentCard
                    photo={user?.studentprofile?.profile_picture}
                    name={`${user?.studentprofile?.first_name} ${user?.studentprofile?.last_name}`}
                    comment={reply_text}
                    updated_at={updated_at}
                  />
                </ul>
              );
            }
          )}
          {loading && (
            <div>
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </div>
          )}
        </div>
      </div>
    )
  );
};
