import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      {localStorage.getItem("accessToken") ? (
        <p>안녕하세요, {localStorage.getItem("nickname")}님!</p>
      ) : (
        <p>로그인을 해주세요.</p>
      )}
      <Navigation />
    </div>
  );
};

export default Home;
