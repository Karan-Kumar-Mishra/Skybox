import { api,getBaseApiUrl } from "./api";

export const renameAPI = async (id, newName) => {
  const response = api.patch(getBaseApiUrl()+"/rename", {
    id,
    newName,
  });
  return response;
};
