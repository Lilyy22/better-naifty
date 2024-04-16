import React, { useState } from "react";
import { Action } from "../../../../components/table/Table";
import { DeleteModal } from "../../../../components/modal/Delete";
import UpdateQuestion from "../updateAssessment";

const QuestionCard = ({
  id,
  question,
  options,
  handleDelete,
  updated,
  setUpdated,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [questionId, setQuestionId] = useState();

  const handleDeleteClick = (questionId) => {
    setOpenDeleteModal(!openDeleteModal);
    setQuestionId(questionId);
  };

  const handleEditClick = (questionId) => {
    setOpenEditModal(!openEditModal);
    setQuestionId(questionId);
  };

  return (
    <div className="mb-8 flex flex-wrap justify-between">
      <div>
        <h1 className="font-medium mb-4 text-base">{question}</h1>
        <ul>
          {options.map(({ id, answer_text, is_true }) => {
            return (
              <li key={id} className="mb-2 text-base flex gap-2">
                {is_true ? (
                  <svg
                    className="w-[12px] h-[11px] fill-purple-400 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                ) : (
                  <svg
                    className="w-[12px] h-[11px] fill-gray-400 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                  </svg>
                )}
                {answer_text}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mb-auto">
        <Action
          id={id}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
        />
      </div>
      {openDeleteModal && (
        <DeleteModal
          isOpen={openDeleteModal}
          courseId={id}
          handleModal={() => setOpenDeleteModal(!openDeleteModal)}
          handleDelete={handleDelete}
        />
      )}
      {openEditModal && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/20">
          <UpdateQuestion
            questionId={questionId}
            handleOpen={() => setOpenEditModal(!openEditModal)}
            updated={updated}
            setUpdated={setUpdated}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
