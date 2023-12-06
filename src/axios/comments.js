import axios from "axios";
import { authApi } from "./auth";

// 로그인이 필요한 api
const commentsAxios = axios.create({
  baseURL: "http://localhost:3004/comments/",
  headers: {
    "Content-Type": "application/json",
  },
});

commentsAxios.interceptors.request.use(
  async (config) => {
    // (1) 로그인이 필요한 api에 대해, 토큰이 있는지 확인
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      // (2) 토큰이 있다면, 헤더에 토큰을 실어서 보낸다.
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      // (3) 토큰이 없다면, 오류를 발생시킨다.
      // throw Error("토큰이 없습니다.");
      alert("토큰이 없습니다.");
      return Promise.reject("토큰이 없습니다.");
    }

    // (4) 토큰이 존재한다면 검증을 함
    // (4-1) 검증을 위해, 서버에 요청을 보냄
    const { data } = await authApi.get("user");
    console.log("====================================");
    console.log(data);
    console.log("====================================");

    if (data.success) {
      // 검증이 성공하면, config를 반환
      return config;
    } else {
      // 검증이 실패하면, 오류를 발생시킴
      // throw Error("검증이 실패하였습니다.");
      alert("검증이 실패하였습니다.");
      return Promise.reject("검증이 실패하였습니다.");
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

commentsAxios.interceptors.response.use((response) => {
  return response;
});

export default commentsAxios;
