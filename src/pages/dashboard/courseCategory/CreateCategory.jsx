import React, { useState } from "react";
import { CREATECATEGORY } from "./data/mutation";
import { Toast } from "../../../components/Toast";
import Crud from "./components/Crud";
import { fileUpload } from "../../../axios/mutation";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GoBack } from "../../../components/Button";

const CreateCategory = () => {
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

  const [createCategory] = useMutation(CREATECATEGORY);
  const handleThumbnail = (e) => {
    setThumbnail(e.target.files[0]);
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const filePath = await fileUpload("COURSE_THUMBNAILS", thumbnail);
      await createCategory({
        variables: {
          name: category.name,
          description: category.description,
          thumbnail: filePath,
        },
      });
      setClose(false);
      setStatus({ ...status, success: true });
      setCategory({
        ...category,
        name: "",
        description: "",
      });
      setLoading(false);
      setThumbnail("");
      setSelectedFile("");
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
  return (
    <>
      {status.success && (
        <Toast
          text="Category Successfully Created!"
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
      />
    </>
  );
};

export default CreateCategory;
