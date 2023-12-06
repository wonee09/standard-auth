import axios from "axios";

const postsAxios = axios.create({
  baseURL: "http://localhost:3004/posts/",
});

export default postsAxios;
