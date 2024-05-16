import React, { useEffect, useState } from "react";
import { GETASSESSMENT, GETSTUDENTSCORE } from "./data/query";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PrimaryButton } from "../../../components/Button";
import OptionalModal from "../../../components/modal/OptionalModal";
import DataNotFound from "../../../components/DataNotFound";

const Score = () => {
  const { course_id } = useParams();
  const [openAssessment, setOpenAssessment] = useState(false);

  const { data: assessment, loading: assessmentLoading } = useQuery(
    GETASSESSMENT,
    {
      variables: {
        courseId: course_id,
      },
      fetchPolicy: "network-only",
    }
  );

  const [getScore, { data, loading }] = useLazyQuery(GETSTUDENTSCORE);

  useEffect(() => {
    const getStuScore = async () => {
      if (assessment?.question?.length !== 0) {
        await getScore({
          variables: {
            courseId: course_id,
          },
        });
      }
    };
    getStuScore();
  }, [assessment]);

  return (
    <>
      {assessment?.question?.length === 0 ? (
        <div>
          <DataNotFound text="No Assessments Yet." />
        </div>
      ) : !loading &&
        !assessmentLoading &&
        data?.assessment_score?.took_assessment ? (
        <>
          <div className="bg-white rounded-lg p-4">
            <h1 className="font-semibold text-green-700 flex gap-1 mb-2 text-sm">
              <svg
                className="w-4 h-4 fill-current my-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
              Course Assessment has been Taken!
            </h1>
            <p className="font-medium my-auto">
              Score : {data?.assessment_score?.score}
            </p>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-lg p-4">
          <h1 className="mb-4 text-sm">
            You have not taken assessment yet, click below to take Now.
          </h1>
          <PrimaryButton handleClick={() => setOpenAssessment(!openAssessment)}>
            Take Assessment
          </PrimaryButton>
          {openAssessment && (
            <OptionalModal
              btnText="Yes"
              goto={`/assessment/${course_id}`}
              setIsOpen={setOpenAssessment}
              isOpen={openAssessment}
              heading="You will have 20 minutes for the exam! ☻"
              subText="Are you sure you want to go now?"
            />
          )}
        </div>
      )}
    </>
  );
};

export default Score;
