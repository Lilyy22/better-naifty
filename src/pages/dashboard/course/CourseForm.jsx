import React, { useContext, useState } from "react";
import { FileUpload, Input, Textarea } from "../../../components/Input";
import { useQuery } from "@apollo/client";
import { GETCOURSECATEGORY } from "../courseCategory/data/query";
import DropDown from "../../../components/DropDown";
import { DashForm } from "../../../components/Form";
import { PrimaryButton } from "../../../components/Button";
import { AuthContext } from "../../../context/AuthContext";

export const CourseForm = () => {
  const { userId } = useContext(AuthContext);
  const [course, setCourse] = useState({
    name: "",
    description: "",
    categoryId: "",
    publishDate: "",
    price: "",
  });
  const [thumbnail, setThumbnail] = useState();

  const { data: categoryData, loading: categoryLoading } =
    useQuery(GETCOURSECATEGORY);

  const handleCategory = (e) => {
    setCourse({ ...course, categoryId: e.target.value });
  };

  const handleThumbnail = (e) => {
    // setSelectedFile(URL.createObjectURL(e.target.files[0]));
    // setThumbnail(e.target.files[0]);
  };

  const handleSubmit = () => {};
  return (
    <>
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
              />
            </div>
            <div className="w-full md:flex-1">
              <Input id="publish_Date" label="Publish Date" type="date" />
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
          />
          <FileUpload
            id="thumbnail"
            label="Thumbnail"
            onChange={handleThumbnail}
          />
          <PrimaryButton text={"Submit"} />
        </form>
      </DashForm>
    </>
  );
};
