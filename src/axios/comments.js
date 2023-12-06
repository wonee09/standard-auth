import axios from "axios";

const commentsAxios = axios.create({
  baseURL: "http://localhost:3004/comments/",
});

//TODO: (1) request 인터셉터, response 인터셉터 정의
commentsAxios.interceptors.request.use(
  async (config) => {
    //TODO: (2) 로그인이 필요한 api이기 때문에, 토큰이 존재하는지 먼저 확인
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      //TODO: (2-2) 존재하지 않는 경우(서버에 보낼 필요 x) -> 오류를 발생시키면 됨
      alert("토큰이 존재하지 않습니다.");
      return Promise.reject("토큰이 존재하지 않습니다.");
    }
    //TODO: (2-1) 존재하는 경우는 다음으로,

    //TODO: (3) 토큰 유효성 검증(to server)
    const { data } = await axios.get(
      "https://moneyfulpublicpolicy.co.kr/user",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (data.success === true) {
      return config;
    } else {
      alert("검증이 실패하였습니다.");
      return Promise.reject("검증이 실패하였습니다.");
    }

    //TODO: (3-1) 유효성 검증이 성공하면 계속 진행
    //TODO: (3-2) 유효성 검증이 실패하면 -> 오류를 발생시키면 됨
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default commentsAxios;
