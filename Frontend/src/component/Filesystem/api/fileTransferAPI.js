import { api ,getBaseApiUrl } from "./api";

export const copyItemAPI = async (sourceIds, destinationId) => {
  const response = await api.post(getBaseApiUrl()+"/copy", { sourceIds, destinationId });
  return response;
};

export const moveItemAPI = async (sourceIds, destinationId) => {
  const response = await api.put(getBaseApiUrl()+"/move", { sourceIds, destinationId });
  return response;
};
