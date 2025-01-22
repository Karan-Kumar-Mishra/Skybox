import { api } from "./api";

export const getAllFilesAPI = async () => {
  try {
    const response = await api.get({name:"karan mishra usr"});
    return response;
  } catch (error) {
    return error;
  }
};
