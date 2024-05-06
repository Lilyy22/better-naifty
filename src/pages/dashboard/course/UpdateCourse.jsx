import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GETCOURSECATEGORY } from "../courseCategory/data/query";
import { fileUpload } from "../../../axios/mutation";
import { UPDATECOURSE } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import { Crud } from "./components/Crud";
import { useNavigate, useParams } from "react-router-dom";
import { GETCOURSE } from "./data/query";
import Breadcrumb from "../../../components/Breadcrumb";

export const UpdateCourse = () => {
  const breadcrumbs = [
    {
      name: "Course",
      path: "/dashboard/course-list",
    },
    {
      name: "Update",
      path: "",
    },
  ];
  const { course_id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const { data: categoryData, loading: categoryLoading } =
    useQuery(GETCOURSECATEGORY);

  const [updateCourse] = useMutation(UPDATECOURSE);
  const {
    data,
    loading: courseLoading,
    refetch,
  } = useQuery(GETCOURSE, {
    variables: {
      courseId: course_id,
    },
  });

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
      let filePath;
      if (selectedFile && thumbnail) {
        filePath = await fileUpload("COURSE_THUMBNAILS", thumbnail);
      }
      await updateCourse({
        variables: {
          courseId: course_id,
          name: course.name,
          description: course.description,
          categoryId: course.categoryId,
          publishDate: course.publishDate,
          price: parseFloat(course.price),
          thumbnail: filePath,
        },
      });
      setLoading(false);
      setClose(false);
      setStatus({ ...status, success: true });
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
    if (!course_id) {
      navigate("/dashboard/course-list");
    } else {
      refetch();
      if (data?.course[0]) {
        setCourse({
          name: data?.course[0]?.name,
          description: data?.course[0]?.description,
          categoryId: data?.course[0]?.category?.id,
          publishDate: new Date(data?.course[0]?.publish_date)
            .toISOString()
            .split("T")[0],
          price: data?.course[0]?.price,
        });
        setThumbnail(data?.course[0]?.thumbnail);
      }
    }
  }, [data?.course[0]]);

  return (
    <>
      {status.success && (
        <Toast
          text="Course Successfully Updated!"
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
        courseLoading={courseLoading}
      />
    </>
  );
};
