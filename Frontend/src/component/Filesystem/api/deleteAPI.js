import { api, getBaseApiUrl } from "./api";

export const deleteAPI = async (ids) => {
  const response = await api.delete(getBaseApiUrl(), { data: { ids: ids } });
  return response;
};