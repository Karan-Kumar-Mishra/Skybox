import { api } from "./api";

import { setBaseApiUrl,getBaseApiUrl } from "./api";
import store from "../../../Redux/store";// import your Redux store
export const createFolderAPI = async (name, parentId) => {
  try {
    const state = store.getState();
    const response = await api.post(getBaseApiUrl()+"/folder", { name, parentId });
    return response;
  } catch (error) {
    return error;
  }
};

