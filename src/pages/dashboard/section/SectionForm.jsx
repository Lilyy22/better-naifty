import React, { useContext, useState } from "react";
import { DashForm } from "../../../components/form/Form";
import { Input, Textarea } from "../../../components/form/Input";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation, useQuery } from "@apollo/client";
import { GETINSTRUCTORCOURSE } from "../course/data/query";
import DropDown from "../../../components/form/DropDown";
import { PrimaryButton } from "../../../components/Button";
import { CREATESECTION } from "./data/mutation";
import { GETINSTRUCTORSECTION } from "./data/query";
import { Toast } from "../../../components/Toast";

export const SectionForm = () => {
  const { userId } = useContext(AuthContext);

  const [success, setSuccess] = useState(false);

  const [createSection, { loading }] = useMutation(CREATESECTION);
  const { data: courseData, loading: courseLoading } = useQuery(
    GETINSTRUCTORCOURSE,
    {
      variables: { userId: userId },
    }
  );

  const [section, setSection] = useState({
    courseId: "",
    title: "",
    description: "",
  });

  const handleCourse = (e) => {
    setSection({ ...section, courseId: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await createSection({
        variables: {
          courseId: section.courseId,
          title: section.title,
          description: section.description,
        },
      });
      if (!error) {
        setSuccess(true);
        setSection({
          ...section,
          courseId: "",
          title: "",
          description: "",
        });
      }
    } catch (error) {}
  };

  return (
    <>
      {success && (
        <Toast text="Section Successfully created!" isSuccess={true} />
      )}
      <DashForm title="Section Form">
        <form className="p-6" onSubmit={handleSubmit}>
          <DropDown
            id="course"
            label="Course"
            data={courseData?.course}
            loading={courseLoading}
            onChange={handleCourse}
            isRequired={true}
          />
          <Input
            id="name"
            label="Section Title"
            type="text"
            placeholder="eg: Python"
            value={section.title}
            onChange={(e) => {
              setSection({ ...section, title: e.target.value });
            }}
            isRequired={true}
          />
          <Textarea
            id="Description"
            label="Description"
            placeholder="eg: Your description here"
            value={section.description}
            onChange={(e) => {
              setSection({ ...section, description: e.target.value });
            }}
            isRequired={false}
          />
          <PrimaryButton
            text={loading ? "•••" : "Submit"}
            isDisabled={loading ? true : false}
          />
        </form>
      </DashForm>
    </>
  );
};
