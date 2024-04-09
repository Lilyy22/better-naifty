import axios from "axios";

const URL =
  process.env.REACT_APP_MINIO_ENDPOINT ?? `https://api.naifty.academy`;

export const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 5000,
});

export const fileUpload = async (bucket, file, uploadProgress) => {
  try {
    const formData = new FormData();
    formData.append("bucket", bucket);
    formData.append("file", file);

    const response = await axios.post(
      `${URL}/media/upload-file`,
      formData,
      uploadProgress
    );
    return response.data?.file;
  } catch (error) {
    throw error;
  }
};
