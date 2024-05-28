import React, { useContext, useEffect, useState } from "react";
import { PrimaryButton } from "../../../components/Button";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GETASSESSMENT, GETSTUDENTSCORE } from "./data/query";
import { useNavigate, useParams } from "react-router-dom";
import Assessment from "./component/Assessment";
import { CREATESTUDENTASSESSMENT } from "./data/mutation";
import { Loader } from "./component/Loader";
import { Logo } from "../../../components/Logo";
import { useRole } from "../../../hooks/useRole";
import { useProfilePicture } from "../../../hooks/useProfilePicture";
import { AuthContext } from "../../../context/AuthContext";
import { trimText } from "../../../utils/trimText";
import { Profile } from "../../../components/Profile";
import { useCountdownTimer } from "../../../hooks/useCountdownTimer";
import ToastModal from "../../../components/modal/Toast";

const StudentAssessment = () => {
  const navigate = useNavigate();
  const { course_id } = useParams();

  const { userEmail, userId } = useContext(AuthContext);
  const { userRole } = useRole();
  const { profilePicture, loading: profileLoading } = useProfilePicture();

  const [answer, setAnswer] = useState([]);

  const [loading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [getScore, { data: score, loading: scoreLoading }] =
    useLazyQuery(GETSTUDENTSCORE);
  const [createAssessment] = useMutation(CREATESTUDENTASSESSMENT);
  const { data, loading: assessmentLoading } = useQuery(GETASSESSMENT, {
    variables: {
      courseId: course_id,
    },
  });
  const { remainingMinutes, remainingSeconds } = useCountdownTimer(
    data?.question?.length * 2 ?? 20
  );

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await createAssessment({
        variables: {
          studentAssessment: answer,
        },
      });

      await getScore({
        variables: {
          courseId: course_id,
          userId: userId,
        },
        refetchQueries: [GETSTUDENTSCORE, "GET_STUDENT_SCORE"],
      });

      setLoading(false);
      setOpen(true);
      setStatus({
        ...status,
        success: true,
      });
      setTimeout(() => {
        setOpen(false);
        navigate(`/dashboard/enrolled-courses/course/${course_id}`);
      }, 3000);
    } catch (error) {
      setLoading(false);
      setOpen(true);
      setStatus({
        success: false,
        error: true,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
      setTimeout(() => {
        setOpen(false);
        navigate(`/dashboard/enrolled-courses/course/${course_id}`);
      }, 2000);
    }
  };

  useEffect(() => {
    if (remainingMinutes === 0 && remainingSeconds === 0) {
      handleSubmit();
    }
  }, [remainingMinutes === 0, remainingSeconds === 0]);

  useEffect(() => {}, [course_id]);
  return (
    <>
      {status.success && (
        <ToastModal
          heading="Assessment Successfully taken!"
          subText={`You have scored: ${score?.assessment_score?.score}`}
          isOpen={isOpen}
          setOpen={setOpen}
        />
      )}
      {status.error && (
        <ToastModal
          heading={status.errorContent ?? "Something went wrong!"}
          isOpen={isOpen}
          setOpen={setOpen}
        />
      )}

      <header className="font-naifty bg-custom-purple-900 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl flex justify-between">
          <div className="my-auto">
            <Logo />
          </div>
          <div className="group relative">
            <Profile
              name={userRole}
              subText={trimText(userEmail, 30)}
              photo={
                profilePicture
                  ? `https://api.naifty.academy/media/${profilePicture}`
                  : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
              }
              loading={profileLoading}
            />
            <div className="hidden group-hover:block md:group-hover:hidden absolute right-1 bg-white rounded-md p-4">
              <div>
                <p className="block text-gray-300 leading-tighter mb-0 font-semibold text-sm">
                  {userRole}
                </p>
                <p className="text-[11.5px] text-gray-400 tracking-loose leading-none">
                  {userEmail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl p-6">
        {!assessmentLoading && (
          <div className="flex justify-between">
            <h1 className="capitalize font-bold">
              {data?.question[0]?.course?.name} Assessment
            </h1>
            <h1 className="text-sm">
              <span className="text-gray-400">Time Remaining:</span>{" "}
              {remainingMinutes}:{" "}
              {remainingSeconds?.toString().length === 2
                ? remainingSeconds
                : `0${remainingSeconds}`}
            </h1>
          </div>
        )}

        <div className="flex justify-center w-full h-full mt-8">
          <form
            className="font-naifty bg-gray-50 p-6 rounded-lg border flex-1"
            onSubmit={handleSubmit}
          >
            {assessmentLoading && <Loader />}
            {data?.question?.map(({ id, question_text, answers }, index) => {
              //answers is a list
              return (
                <Assessment
                  key={id}
                  id={id}
                  userId={userId}
                  no={index + 1}
                  question={question_text}
                  options={answers}
                  answer={answer}
                  setAnswer={setAnswer}
                />
              );
            })}
            <PrimaryButton type={loading ? "button" : "submit"}>
              {loading ? "Sending•••" : "Submit"}
            </PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentAssessment;
