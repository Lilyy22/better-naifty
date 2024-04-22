import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GETDISCUSSIONBYCOURSE } from "./data/query";
import { PrimaryButton } from "../../../components/Button";
import { CreateForum } from "./CreateForum";
import { Card } from "./component/Card";
import { useParams } from "react-router-dom";
import { ListLoader } from "./component/Loader";
import DataNotFound from "../../../components/DataNotFound";
import { UpdateForum } from "./UpdateForum";
import { DELETEDISCUSSION } from "./data/mutation";
import { DeleteModal } from "../../../components/modal/Delete";

const Forum = () => {
  const { course_id } = useParams();
  const [forumId, setForumId] = useState();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [del] = useMutation(DELETEDISCUSSION);

  const { data, loading } = useQuery(GETDISCUSSIONBYCOURSE, {
    variables: {
      courseId: course_id,
    },
  });

  const handleDeleteClick = (id) => {
    setOpenDeleteModal(!openDeleteModal);
    setForumId(id);
  };

  const handleEditClick = (id) => {
    setOpenEditModal(!openEditModal);
    setForumId(id);
  };

  const handleDelete = async (id) => {
    const { data } = await del({
      variables: {
        topicId: id,
      },
      refetchQueries: [GETDISCUSSIONBYCOURSE, "GET_DISCUSSION_BY_COURSE"],
    });
    if (data) setOpenDeleteModal(false);
  };

  return (
    <div className="bg-white p-4 rounded">
      <div className="flex flex-wrap gap-2 justify-between">
        <h1 className="font-medium mb-4">Discussions</h1>
        <PrimaryButton
          handleClick={() => setOpenCreateModal(!openCreateModal)}
          text="Create Topic"
          customStyle="mb-auto"
        />
      </div>
      {loading && <ListLoader />}
      {data?.discussion_topic?.length === 0 && (
        <DataNotFound text="No discussion for this course yet." />
      )}
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
            handleDeleteClick={handleDeleteClick}
            handleEditClick={handleEditClick}
            setForumId={setForumId}
          />
        );
      })}
      {openCreateModal && (
        <CreateForum
          courseId={course_id}
          handleOpen={() => setOpenCreateModal(!openCreateModal)}
        />
      )}
      {openDeleteModal && (
        <DeleteModal
          isOpen={openDeleteModal}
          courseId={forumId}
          handleModal={() => setOpenDeleteModal(!openDeleteModal)}
          handleDelete={handleDelete}
        />
      )}
      {openEditModal && (
        <UpdateForum
          topicId={forumId}
          handleOpen={() => setOpenEditModal(!openEditModal)}
        />
      )}
    </div>
  );
};

export default Forum;
