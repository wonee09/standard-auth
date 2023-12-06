import axios from "axios";

const commentsAxios = axios.create({
  baseURL: "http://localhost:3004/comments/",
  timeout: 1000,
});

export default commentsAxios;
