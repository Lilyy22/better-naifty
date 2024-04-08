import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GETASSESSMENT } from "./data/query";
import DataNotFound from "../../../components/DataNotFound";
import { TableLoader } from "../../../components/Loader";
import CreateAssessment from "./CreateAssessment";
import { PrimaryButton } from "../../../components/Button";
import QuestionCard from "./component/QuestionCard";
import { DashH4 } from "../../../components/Heading";

const List = ({ courseId }) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const { data, loading, refetch } = useQuery(GETASSESSMENT, {
    variables: {
      courseId: courseId,
    },
  });

  useEffect(() => {
    refetch();
  }, [data]);
  return (
    <>
      {loading && <TableLoader />}
      {data?.assessment?.length === 0 && <DataNotFound text="No Assessments" />}
      <div className="px-6 py-2 flex justify-between">
        <p className="text-gray-500 text-xs italic">
          Please create a bunch of questions that could be used to make
          assessment for enrolled students.
        </p>
        <PrimaryButton
          text="Create"
          customStyle="float-right mb-auto"
          handleClick={() => setOpenCreateModal(!openCreateModal)}
        >
          <svg
            className="w-2.5 h-2.5 fill-current leading-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </PrimaryButton>
      </div>
      {openCreateModal && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/20">
          <CreateAssessment
            courseId={courseId}
            handleOpen={() => setOpenCreateModal(!openCreateModal)}
          />
        </div>
      )}
      <div className="bg-gray-50/80 rounded p-8 border border-gray-100">
        <div className="border-b mb-4">
          <DashH4 text="Quiz" />
        </div>
        <QuestionCard
          question="2x + 6y = 22, x + y = 5 What is x?"
          options={[
            {
              option: "1",
            },
            {
              option: "2",
            },
            {
              option: "3",
            },
          ]}
        />
        <QuestionCard
          question="2x + 6y = 22, x + y = 5 What is x?"
          options={[
            {
              option: "1",
            },
            {
              option: "2",
            },
            {
              option: "3",
            },
          ]}
        />
        <QuestionCard
          question="2x + 6y = 22, x + y = 5 What is x?"
          options={[
            {
              option: "1",
            },
            {
              option: "2",
            },
            {
              option: "3",
            },
          ]}
        />
      </div>
    </>
  );
};

export default List;
