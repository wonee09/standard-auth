import axios from "axios";
import React from "react";
import commentsAxios from "../axios/comments";

const TestPage = () => {
  const handleGetPostButtonClick = () => {
    axios
      .get("http://localhost:3004/posts")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGetCommentsButtonClick = () => {
    commentsAxios
      .get("http://localhost:3004/posts")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Test Page</h1>
      <p>api 테스트를 진행합니다.</p>
      <button onClick={handleGetPostButtonClick}>
        posts가져오기 테스트(로그인필요없음)
      </button>
      <button onClick={handleGetCommentsButtonClick}>
        comments가져오기 테스트(로그인필요)
      </button>
    </div>
  );
};

export default TestPage;
