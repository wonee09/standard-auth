import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../axios/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            // (1) 로그인 시도
            const response = await authApi.post("login", {
              id: id,
              password: password,
            });

            // (2) localStorage에 토큰 저장
            if (!response.data.accessToken) {
              alert("토큰이 없습니다. 고객센터에 문의해주세요.");
              return;
            }

            // (3) 로그인 성공 시, 안내 메시지
            alert("로그인에 성공하였습니다. 메인 페이지로 이동할게용");

            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("nickname", response.data.nickname);

            // (4) 메인 페이지로 이동
            navigate("/");
          } catch (error) {
            alert(error.response.data.message);
          }
        }}
      >
        <div>
          <label htmlFor="id">id</label>
          <input
            type="string"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
