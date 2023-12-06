import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleToSignupButtonClick = () => {
    // TODO: navigate로 signup페이지로 이동
    navigate("/signup");
  };

  const handleSubmitButtonClick = async (e) => {
    e.preventDefault();

    try {
      //TODO: state인 id와, password를 가지와서 로그인 시도
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );

      const accessToken = response.data.accessToken;
      const nickname = response.data.nickname;

      //TODO: 로그인이 완료되면, 토큰을 localhost에 저장(토큰없으면 오류)
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("nickName", nickname);

      //TODO: 로그인 성공에 대한 안내메시지
      alert("로그인이 성공했습니다.");

      //TODO: 메인페이지로 이동
      navigate("/");
    } catch (error) {
      //   console.log(error.response.data.message);
      const errorMessage = error.response.data.message;
      alert(errorMessage);
    }
  };

  return (
    <div>
      <header>
        <h1>로그인페이지입니다.</h1>
        <p>로그인을 위해서 아이디와 패스워드를 입력해주세요.</p>
      </header>
      <main>
        <form onSubmit={handleSubmitButtonClick}>
          <section>
            <label htmlFor="id">id</label>
            <input id="id" type="string" value={id} onChange={handleIdChange} />
          </section>
          <section>
            <label htmlFor="password">password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </section>
          <button type="submit">로그인</button>
          <button type="button" onClick={handleToSignupButtonClick}>
            회원가입으로
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
