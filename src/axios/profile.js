import axios from "axios";

const profileAxios = axios.create({
  baseURL: "http://localhost:3004/profile/",
});

export default profileAxios;
