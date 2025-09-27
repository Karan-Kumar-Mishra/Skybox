import { api,getBaseApiUrl } from "./api";

export const getAllFilesAPI = async () => {
  try {
    console.log("while the getting the URLs=> ",getBaseApiUrl())
    const response = await api.get(getBaseApiUrl());
    return response;
  } catch (error) {
    return error;
  }
};