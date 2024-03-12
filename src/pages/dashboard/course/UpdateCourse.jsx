import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GETCOURSECATEGORY } from "../courseCategory/data/query";
import { fileUpload } from "../../../axios/mutation";
import { UPDATECOURSE } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import { Crud } from "./components/Crud";
import { useNavigate, useParams } from "react-router-dom";
import { GETCOURSE } from "./data/query";
import { GoBack } from "../../../components/Button";

export const UpdateCourse = () => {
  const { course_id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { data: categoryData, loading: categoryLoading } =
    useQuery(GETCOURSECATEGORY);
  const [updateCourse] = useMutation(UPDATECOURSE);
  const { data } = useQuery(GETCOURSE, {
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
      const { error } = await updateCourse({
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
      if (!error) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/dashboard/course-list");
        }, 1000);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!course_id) {
      navigate("/dashboard/course-list");
    } else {
      if (data?.course[0]) {
        setCourse({
          name: data.course[0].name,
          description: data.course[0].description,
          categoryId: data.course[0].category?.id,
          publishDate: new Date(data.course[0].publish_date)
            .toISOString()
            .split("T")[0],
          price: data.course[0].price,
        });
        setThumbnail(data.course[0].thumbnail);
      }
    }
  }, [data?.course[0]]);

  return (
    <>
      {success && (
        <Toast text="Course Successfully Updated!" isSuccess={true} />
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
