import React, { useContext, useState } from "react";
import { Rate } from "../../../../components/Rating";
import { Textarea } from "../../../../components/form/Input";
import { useMutation } from "@apollo/client";
import { PrimaryButton } from "../../../../components/Button";
import { AuthContext } from "../../../../context/AuthContext";
import { CREATECOURSERATING } from "../data/mutation";
import { Toast } from "../../../../components/Toast";
import { useParams } from "react-router-dom";

const CourseRating = ({ handleModal, isOpen }) => {
  const { userId } = useContext(AuthContext);
  const { course_id } = useParams();

  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [createRating] = useMutation(CREATECOURSERATING);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      return;
    }
    try {
      setLoading(true);
      await createRating({
        variables: {
          courseId: course_id,
          userId: userId,
          description: description,
          rating: rating,
        },
      });
      setLoading(false);
      setClose(false);
      setStatus({ ...status, success: true });
      setTimeout(() => {
        handleModal();
      }, 1000);
    } catch (error) {
      setLoading(false);
      setClose(false);
      setStatus({
        success: false,
        error: true,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };

  return (
    <>
      {status.success && (
        <Toast
          text="Rating Received Successfully!"
          isSuccess={true}
          close={close}
          setClose={setClose}
        />
      )}
      {status.error && (
        <Toast
          text={status.errorContent ?? "Something went wrong!"}
          isSuccess={false}
          close={close}
          setClose={setClose}
        />
      )}
      <div className={isOpen ? "" : "hidden"}>
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 flex left-0 z-50 justify-center items-center w-full min-h-full bg-gray-800/30 "
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="bg-white shadow rounded-lg p-6 text-center max-w-sm">
              <h3 className="font-mont font-semibold text-sm text-purple-700">
                Your opinion matter to us! <br />
                Rate Course.
              </h3>
              <div className="flex justify-center mt-4 mb-6">
                <Rate setRating={setRating} />
              </div>

              <form onSubmit={handleSubmit}>
                <Textarea
                  noLabel={true}
                  id="Description"
                  label="Description"
                  placeholder="Leave a message, If you want"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  isRequired={false}
                  disabled={loading ? true : false}
                />
                <PrimaryButton
                  customStyle="w-full"
                  text={loading ? "•••" : "Submit"}
                  isDisabled={loading ? true : false}
                />
              </form>
              <button
                onClick={handleModal}
                className="w-full text-gray-400 font-semibold text-xs mt-4"
                disabled={loading ? true : false}
              >
                Maybe, Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseRating;
