import axios from "axios";

const profileAxios = axios.create({
  baseURL: "http://localhost:3004/profile/",
  timeout: 2000,
});

export default profileAxios;
