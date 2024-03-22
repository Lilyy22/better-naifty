import React, { useEffect, useState } from "react";
import { UPDATECATEGORY } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Crud from "./components/Crud";
import { fileUpload } from "../../../axios/mutation";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GETCATEGORY } from "./data/query";
import { GoBack } from "../../../components/Button";

const UpdateCategory = () => {
  const { category_id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
  });

  const [selectedFile, setSelectedFile] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });

  const [updateCategory] = useMutation(UPDATECATEGORY);
  const {
    data,
    loading: categoryLoading,
    refetch,
  } = useQuery(GETCATEGORY, {
    variables: {
      categoryId: category_id,
    },
  });

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
      await updateCategory({
        variables: {
          categoryId: category_id,
          name: category.name,
          description: category.description,
          thumbnail: filePath,
        },
      });
      setLoading(false);
      setStatus({
        success: true,
        error: false,
      });
      setTimeout(() => {
        navigate("/dashboard/categories");
      }, 1000);
    } catch (error) {
      setClose(false);
      setStatus({
        success: false,
        error: true,
        errorContent: error?.graphQLErrors?.[0]?.message,
      });
    }
  };

  useEffect(() => {
    if (!category_id) {
      navigate("/dashboard/categories");
    } else {
      refetch();
      if (data?.course_category[0]) {
        setCategory({
          name: data?.course_category[0]?.name,
          description: data?.course_category[0]?.description,
        });
        setThumbnail(data?.course_category[0]?.image);
      }
    }
  }, [data?.course_category[0]]);

  return (
    <>
      {status.success && (
        <Toast
          text="Category Successfully Updated!"
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
      <GoBack text="Back" pathname="/dashboard/categories" />
      <Crud
        handleSubmit={handleSubmit}
        handleThumbnail={handleThumbnail}
        thumbnail={thumbnail}
        category={category}
        setCategory={setCategory}
        loading={loading}
        selectedFile={selectedFile}
        categoryLoading={categoryLoading}
      />
    </>
  );
};

export default UpdateCategory;
