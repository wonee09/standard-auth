import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {
  const navigate = useNavigate();
  const [isRender, setIsRender] = useState(false);

  const handleToLoginButtonClick = () => {
    //TODO: 로그인 페이지로 Routing(useNavigate)
    navigate("/login");
  };

  const handleLogoutButtonClick = () => {
    //TODO: 기존에 가지고 있던 localStorage의 accessToken ~~ 제거
    localStorage.removeItem("accessToken");
    localStorage.removeItem("nickName");

    setIsRender((prev) => !prev);
  };

  const isLoggedIn = localStorage.getItem("accessToken") ? true : false;
  const userNickname = localStorage.getItem("nickName");

  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      {isLoggedIn === true ? (
        <div>
          <p>안녕하세요 {userNickname}님반갑습니다.</p>
          <button onClick={handleLogoutButtonClick}>로그아웃</button>
        </div>
      ) : (
        <button onClick={handleToLoginButtonClick}>로그인</button>
      )}

      <Navigation />
    </div>
  );
};

export default Home;
