import React, { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GETCOURSECATEGORY } from "../courseCategory/data/query";
import { AuthContext } from "../../../context/AuthContext";
import { fileUpload } from "../../../axios/mutation";
import { CREATECOURSE } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import { Crud } from "./components/Crud";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";

export const CreateCourse = () => {
  const breadcrumbs = [
    {
      name: "Course",
      path: "/dashboard/course-list",
    },
    {
      name: "Create",
      path: "",
    },
  ];

  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const { data: categoryData, loading: categoryLoading } =
    useQuery(GETCOURSECATEGORY);
  const [createCourse] = useMutation(CREATECOURSE);

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
      await createCourse({
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
      setClose(false);
      setStatus({ ...status, success: true });
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

  useEffect(() => {
    setCourse({ ...course, categoryId: categoryData?.course_category[0]?.id });
  }, [categoryLoading]);

  return (
    <>
      {status.success && (
        <Toast
          text="Course Successfully Created!"
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
      <Breadcrumb breadcrumbs={breadcrumbs} />
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
        note={true}
      />
    </>
  );
};
