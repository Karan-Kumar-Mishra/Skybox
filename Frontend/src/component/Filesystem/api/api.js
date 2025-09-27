import axios from "axios";


let URL = null;
export function setBaseApiUrl(value) {
  URL = value;
}
export function getBaseApiUrl(value) {
  return URL;
}
export const api = axios.create({
  baseURL: URL
});
