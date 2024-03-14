import React from "react";
import { DashForm } from "../../../../components/form/Form";
import DropDown from "../../../../components/form/DropDown";
import { Input, Textarea } from "../../../../components/form/Input";
import { PrimaryButton } from "../../../../components/Button";

const Crud = ({
  handleSubmit,
  courseData,
  courseLoading,
  handleCourse,
  section,
  setSection,
  loading,
  sectionLoading,
}) => {
  return (
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
          value={sectionLoading ? "•••" : section.title}
          onChange={(e) => {
            setSection({ ...section, title: e.target.value });
          }}
          isRequired={true}
        />
        <Textarea
          id="Description"
          label="Description"
          placeholder="eg: Your description here"
          value={sectionLoading ? "•••" : section.description}
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
  );
};

export default Crud;
