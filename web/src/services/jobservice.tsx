import axios from "axios";

// For now, change this to PROD URL
// TODO: Add a falg to switch between PROD and DEV envs
const baseURL = "http://localhost:8080";

export const getHomeJobs = async () => {
  try {
    const response = await axios.get(baseURL + "/api/v1/jobs?limit=4&page=1");
    return response.data;
  } catch (error) {
    return new Error();
  }
};

export const getAllJobs = async () => {
  try {
    const response = await axios.get(baseURL + "/api/v1/jobs?limit=10");
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
