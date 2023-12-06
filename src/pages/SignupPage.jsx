import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleToLoginButtonClick = () => {
    // TODO: navigate로 signup페이지로 이동
    navigate("/login");
  };

  const handleSubmitButtonClick = async (e) => {
    e.preventDefault();

    try {
      //TODO: state인 id와, password, nickname을 가지와서 회원가입 시도
      await axios.post("https://moneyfulpublicpolicy.co.kr/register", {
        id,
        password,
        nickname,
      });

      //TODO: 성공한 경우, 로그인페이지로
      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error) {
      //   console.log(error.response.data.message);
      const errorMessage = error.response.data.message;
      alert(errorMessage);
    }
  };

  return (
    <div>
      <header>
        <h1>회원가입페이지입니다.</h1>
        <p>회원가입을 위해서 아이디와 패스워드, 닉네임을 입력해주세요.</p>
      </header>
      <main>
        <form onSubmit={handleSubmitButtonClick}>
          {/* 아이디 */}
          <section>
            <label htmlFor="id">id</label>
            <input id="id" type="string" value={id} onChange={handleIdChange} />
          </section>

          {/* 닉네임 */}
          <section>
            <label htmlFor="nickname">nickname</label>
            <input
              id="nickname"
              type="string"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </section>

          {/* 패스워드 */}
          <section>
            <label htmlFor="password">password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </section>

          <button type="submit">회원가입</button>
          <button type="button" onClick={handleToLoginButtonClick}>
            로그인으로
          </button>
        </form>
      </main>
    </div>
  );
};

export default SignupPage;
