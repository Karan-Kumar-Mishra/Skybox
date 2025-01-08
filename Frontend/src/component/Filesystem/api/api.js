import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_API_BASE_URL,
});
