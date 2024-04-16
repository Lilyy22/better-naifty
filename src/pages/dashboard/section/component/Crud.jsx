import React from "react";
import { Input, Textarea } from "../../../../components/form/Input";
import { PrimaryButton } from "../../../../components/Button";
import { FormModal } from "../../../../components/modal/FormModal";

const Crud = ({
  handleSubmit,
  section,
  setSection,
  loading,
  sectionLoading,
  handleOpen,
}) => {
  return (
    <FormModal handleOpen={handleOpen} title="Section" loading={loading}>
      <form className="p-6" onSubmit={handleSubmit}>
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
    </FormModal>
  );
};

export default Crud;
