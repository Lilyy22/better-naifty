import React from "react";
import { FileUpload, Input, Textarea } from "../../../../components/form/Input";
import { DashForm } from "../../../../components/form/Form";
import DropDown from "../../../../components/form/DropDown";
import { PrimaryButton } from "../../../../components/Button";

export const Crud = ({
  handleSubmit,
  handleThumbnail,
  thumbnail,
  course,
  setCourse,
  loading,
  categoryData,
  categoryLoading,
  handleCategory,
}) => {
  return (
    <DashForm title="Course Form">
      <form className="p-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap md:space-x-4">
          <div className="w-full md:w-[47%]">
            <Input
              id="name"
              label="Course"
              type="text"
              placeholder="eg: Python"
              value={course.name}
              onChange={(e) => {
                setCourse({ ...course, name: e.target.value });
              }}
              isRequired={true}
            />
          </div>
          <div className="w-full md:flex-1">
            <Input
              id="price"
              label="Price"
              type="number"
              placeholder="eg: $452"
              value={course.price}
              onChange={(e) => {
                setCourse({
                  ...course,
                  price: parseFloat(e.target.value),
                });
              }}
              isRequired={true}
            />
          </div>
        </div>
        <div className="flex flex-wrap md:space-x-4">
          <div className="w-full md:w-[47%]">
            <DropDown
              id="course_category"
              label="Category"
              data={categoryData?.course_category}
              loading={categoryLoading}
              onChange={handleCategory}
              isRequired={true}
            />
          </div>
          <div className="w-full md:flex-1">
            <Input
              id="publish_Date"
              label="Publish Date"
              type="date"
              value={course.publishDate}
              onChange={(e) => {
                setCourse({
                  ...course,
                  publishDate: e.target.value,
                });
              }}
              isRequired={true}
            />
          </div>
        </div>
        <Textarea
          id="Description"
          label="Description"
          placeholder="eg: Your description here"
          value={course.description}
          onChange={(e) => {
            setCourse({ ...course, description: e.target.value });
          }}
          isRequired={true}
        />
        <FileUpload
          id="thumbnail"
          label="Thumbnail"
          onChange={handleThumbnail}
          isRequired={true}
          thumbnail={thumbnail}
        />
        <PrimaryButton
          text={loading ? "•••" : "Submit"}
          isDisabled={loading ? true : false}
        />
      </form>
    </DashForm>
  );
};
