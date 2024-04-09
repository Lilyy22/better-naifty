import React from "react";
import { DashForm } from "../../../../components/form/Form";
import { Input, Textarea } from "../../../../components/form/Input";
import { PrimaryButton } from "../../../../components/Button";

const Crud = ({
  handleSubmit,
  handleThumbnail,
  categoryLoading,
  category,
  loading,
  setCategory,
  thumbnail,
  selectedFile,
}) => {
  return (
    <DashForm title="Category Form">
      <form className="p-6" onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Category Name"
          type="text"
          placeholder="eg: Technology"
          value={categoryLoading ? "•••" : category.name}
          onChange={(e) => {
            setCategory({ ...category, name: e.target.value });
          }}
          isRequired={true}
        />
        <Textarea
          id="Description"
          label="Description"
          placeholder="eg: Your description here"
          value={categoryLoading ? "•••" : category.description}
          onChange={(e) => {
            setCategory({ ...category, description: e.target.value });
          }}
          isRequired={false}
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
                categoryLoading ?? "animate-pulse"
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
        <PrimaryButton
          text={loading ? "•••" : "Submit"}
          isDisabled={loading ? true : false}
        />
      </form>
    </DashForm>
  );
};

export default Crud;
