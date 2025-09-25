import axios from "axios";
import store from "../../../Redux/store";// import your Redux store

function getUrl() {
  const state = store.getState();
  console.log("while get the url in files")
  return state?.Data?.UserData?.fs_info?.fs_url;
}

export const api = axios.create({
  baseURL: getUrl()
});