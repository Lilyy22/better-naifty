import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GETASSESSMENT } from "./data/query";
import DataNotFound from "../../../components/DataNotFound";
import CreateAssessment from "./CreateAssessment";
import { PrimaryButton } from "../../../components/Button";
import QuestionCard from "./component/QuestionCard";
import { DashH4 } from "../../../components/Heading";
import { DELETEQUESTION } from "./data/mutation";
import Pagination from "../../../components/Pagination";
import { Loader } from "./component/Loader";

const List = ({ courseId }) => {
  const [pagination, setPagination] = useState({
    limit: 5,
    offset: 0,
  });

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [updated, setUpdated] = useState(false);

  const [delQuestion] = useMutation(DELETEQUESTION);
  const { data, loading, refetch, fetchMore } = useQuery(GETASSESSMENT, {
    variables: {
      courseId: courseId,
      limit: pagination.limit,
      offset: pagination.offset,
    },
  });

  const handleDelete = async (questionId) => {
    await delQuestion({
      variables: {
        id: questionId,
      },
      refetchQueries: [GETASSESSMENT, "GETASSESSMENT"],
    });
  };

  useEffect(() => {
    refetch();
  }, [updated]);

  return (
    <>
      <div className="px-6 py-2">
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
      {loading && <Loader />}
      {data?.question?.length === 0 && (
        <div>
          <p className="text-gray-500 text-sm italic text-center mx-auto max-w-lg">
            Please create a bunch of questions that could be used to make
            assessment for enrolled students.
          </p>
          <DataNotFound text="No Assessments" />
        </div>
      )}

      {openCreateModal && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/20">
          <CreateAssessment
            courseId={courseId}
            handleOpen={() => setOpenCreateModal(!openCreateModal)}
            updated={updated}
            setUpdated={setUpdated}
          />
        </div>
      )}

      {data?.question?.length > 0 && (
        <div className="rounded p-8 xl:border border-gray-100 xl:w-1/2">
          <div className="border-b mb-4">
            <DashH4 text="Quiz" />
          </div>
          {data?.question?.map(({ id, question_text, answers }) => {
            //answers is a list
            return (
              <QuestionCard
                key={id}
                id={id}
                question={question_text}
                options={answers}
                handleDelete={handleDelete}
                updated={updated}
                setUpdated={setUpdated}
              />
            );
          })}
          <div>
            <Pagination
              totalCount={data?.question[0]?.aggregate?.count}
              fetchMore={fetchMore}
              pagination={pagination}
              setPagination={setPagination}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default List;
