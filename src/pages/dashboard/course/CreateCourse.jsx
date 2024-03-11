import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GETCOURSECATEGORY } from "../courseCategory/data/query";
import { AuthContext } from "../../../context/AuthContext";
import { fileUpload } from "../../../axios/mutation";
import { CREATECOURSE } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import { Crud } from "./components/Crud";
import { useNavigate } from "react-router-dom";

export const CreateCourse = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { data: categoryData, loading: categoryLoading } =
    useQuery(GETCOURSECATEGORY);
  const [createCourse, {}] = useMutation(CREATECOURSE);

  const [selectedFile, setSelectedFile] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [course, setCourse] = useState({
    name: "",
    description: "",
    categoryId: "",
    publishDate: "",
    price: "",
  });

  const handleCategory = (e) => {
    setCourse({ ...course, categoryId: e.target.value });
  };

  const handleThumbnail = (e) => {
    setThumbnail(e.target.files[0]);
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const filePath = await fileUpload("COURSE_THUMBNAILS", thumbnail);
      const { error } = await createCourse({
        variables: {
          name: course.name,
          description: course.description,
          categoryId: course.categoryId,
          publishDate: course.publishDate,
          price: course.price,
          thumbnail: filePath,
          instructorId: userId,
        },
      });
      setLoading(false);
      if (!error) {
        setSuccess(true);
        setCourse({
          ...course,
          name: "",
          description: "",
          categoryId: "",
          publishDate: "",
          price: "",
        });
        setThumbnail("");
        setSelectedFile("");
        navigate("/dashboard/course-list");
      }
    } catch (error) {}
  };
  return (
    <>
      {success && (
        <Toast text="Course Successfully created!" isSuccess={true} />
      )}
      {/* <DashForm title="Course Form">
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
      </DashForm> */}
      <Crud
        handleSubmit={handleSubmit}
        handleThumbnail={handleThumbnail}
        thumbnail={thumbnail}
        course={course}
        setCourse={setCourse}
        loading={loading}
        categoryData={categoryData}
        categoryLoading={categoryLoading}
        handleCategory={handleCategory}
        selectedFile={selectedFile}
      />
    </>
  );
};
