import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GETCOURSECATEGORY } from "../courseCategory/data/query";
import { AuthContext } from "../../../context/AuthContext";
import { fileUpload } from "../../../axios/mutation";
import { CREATECOURSE } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import { Crud } from "./components/Crud";
import { useNavigate } from "react-router-dom";
import { GoBack } from "../../../components/Button";

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
        setTimeout(() => {
          navigate("/dashboard/course-list");
        }, 1000);
      }
    } catch (error) {}
  };
  return (
    <>
      {success && (
        <Toast text="Course Successfully Created!" isSuccess={true} />
      )}
      <GoBack text="Back" pathname="/dashboard/course-list" />
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
