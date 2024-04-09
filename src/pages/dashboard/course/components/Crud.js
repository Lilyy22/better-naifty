import React from "react";
import { Input, Textarea } from "../../../../components/form/Input";
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
  selectedFile,
  courseLoading,
  note,
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
              value={courseLoading ? "•••" : course.name}
              onChange={(e) => {
                setCourse({
                  ...course,
                  name: e.target.value,
                });
              }}
              isRequired={true}
              disabled={loading ? true : false}
            />
          </div>
          <div className="w-full md:flex-1">
            <Input
              id="price"
              label="Price"
              type="number"
              placeholder="eg: $452"
              value={courseLoading ? "•••" : course.price}
              onChange={(e) => {
                setCourse({
                  ...course,
                  price: parseFloat(e.target.value),
                });
              }}
              isRequired={true}
              disabled={loading ? true : false}
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
              disabled={loading ? true : false}
            />
          </div>
          <div className="w-full md:flex-1">
            <Input
              id="publish_Date"
              label="Publish Date"
              type="date"
              value={courseLoading ? "•••" : course.publishDate}
              onChange={(e) => {
                setCourse({
                  ...course,
                  publishDate: e.target.value,
                });
              }}
              isRequired={true}
              disabled={loading ? true : false}
            />
          </div>
        </div>
        <Textarea
          id="Description"
          label="Description"
          placeholder="eg: Your description here"
          value={courseLoading ? "•••" : course.description}
          onChange={(e) => {
            setCourse({ ...course, description: e.target.value });
          }}
          isRequired={true}
          disabled={loading ? true : false}
        />
        <label
          htmlFor="thumbnail"
          className="inline-block mb-2 text-xs font-semibold tracking-wide"
        >
          Thumbnail
        </label>
        <span className="text-red-500 pl-1 text-sm">*</span>
        <div className="mb-6 relative border-2 w-full md:w-96 h-52 cursor-pointer mx-auto md:mx-0 rounded-lg border-dashed">
          {thumbnail && !selectedFile ? (
            <img
              src={`https://api.naifty.academy/media/${thumbnail}`}
              className={`cursor-pointer w-full h-full object-cover object-center rounded-lg ${
                courseLoading ?? "animate-pulse"
              }`}
              alt="thumbnail"
            />
          ) : (
            <img
              src={
                selectedFile
                  ? selectedFile
                  : "https://lms.qualtec.ie/wp-content/plugins/learndash-course-grid/assets/img/thumbnail.jpg"
              }
              className="cursor-pointer object-cover object-center w-full h-full rounded-lg"
              alt="thumbnail place holder"
            />
          )}

          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            className="z-10 absolute w-full h-full rounded-full border p-6 top-0 left-0 opacity-0 cursor-pointer"
            onChange={handleThumbnail}
            required={thumbnail ? false : true}
            disabled={loading ? true : false}
          />
        </div>
        {note && (
          <div className="pb-4 w-3/4">
            <p className="text-xs text-gray-500 italic tracking-wide">
              Please Create section and episodes after creating course and your
              course will be available after getting reviewed by Administrator.
            </p>
          </div>
        )}
        <PrimaryButton
          text={loading ? "•••" : "Submit"}
          isDisabled={loading ? true : false}
        />
      </form>
    </DashForm>
  );
};
