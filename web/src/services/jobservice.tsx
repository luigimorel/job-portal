import axios from "axios";

const baseURL = "http://localhost:8080";

export const getAllJobs = async () => {
  try {
    const response = await axios.get(baseURL + "/api/v1/jobs");
    return response.data;
  } catch (error) {
    return new Error();
  }
};

export const postAJob = async () => {
  try {
    const response = await axios.post(baseURL + "/api/v1/create");
    return response.data;
  } catch (error) {
    return new Error();
  }
};

