import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

export const getHomeJobs = async () => {
  try {
    const response = await axios.get(baseURL + "/jobs?limit=4&page=1");
    return response.data;
  } catch (error) {
    return new Error().message;
  }
};

export const getAllJobs = async () => {
  try {
    const response = await axios.get(baseURL + "/jobs?limit=10");
    return response.data;
  } catch (error) {
    return new Error().message;
  }
};

export const postAJob = async () => {
  try {
    const response = await axios.post(baseURL + "/create");
    return response.data;
  } catch (error) {
    return new Error().message;
  }
};

export const getJobById = async (id: string) => {
  try {
    const response = await axios.get(baseURL + `/jobs/${id}`);
    return response.data;
  } catch (error) {
    return new Error().message;
  }
};
