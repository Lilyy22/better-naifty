import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GETASSESSMENT } from "./data/query";
import DataNotFound from "../../../components/DataNotFound";
import { TableLoader } from "../../../components/Loader";
import CreateAssessment from "./CreateAssessment";
import { PrimaryButton } from "../../../components/Button";

const List = ({ courseId }) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const { data, loading } = useQuery(GETASSESSMENT, {
    variables: {
      courseId: courseId,
    },
  });

  return (
    <>
      {loading && <TableLoader />}
      {data?.assessment?.length === 0 && <DataNotFound text="No Assessments" />}
      <PrimaryButton
        text="Create"
        customStyle="float-right"
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
      {openCreateModal && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-700/20">
          <CreateAssessment
            courseId={courseId}
            handleOpen={() => setOpenCreateModal(!openCreateModal)}
          />
        </div>
      )}
    </>
  );
};

export default List;
