import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GETDISCUSSIONBYCOURSE } from "./data/query";
import { PrimaryButton } from "../../../components/Button";
import { CreateForum } from "./CreateForum";
import { Card } from "./component/Card";
import { useParams } from "react-router-dom";

const Forum = () => {
  const { course_id } = useParams();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const { data, loading } = useQuery(GETDISCUSSIONBYCOURSE, {
    variables: {
      courseId: course_id,
    },
  });

  return (
    <div className="bg-white p-6 rounded flex gap-2 justify-between">
      {data?.discussion_topic && (
        <div className="flex-1">
          <h1 className="font-medium mb-4">Discussions</h1>
          {data?.discussion_topic?.map(({ id, title, user, updated_at }) => {
            return (
              <Card
                key={id}
                id={id}
                courseId={course_id}
                title={title}
                profile={user?.studentprofile?.profile_picture}
                date={updated_at}
                name={`${user?.studentprofile?.first_name} ${user?.studentprofile?.last_name}`}
              />
            );
          })}
        </div>
      )}
      {openCreateModal && (
        <CreateForum
          courseId={course_id}
          handleOpen={() => setOpenCreateModal(!openCreateModal)}
        />
      )}
      <PrimaryButton
        handleClick={() => setOpenCreateModal(!openCreateModal)}
        text="Create Topic"
        customStyle="mb-auto"
      />
    </div>
  );
};

export default Forum;
