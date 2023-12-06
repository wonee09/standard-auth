import React from "react";
import commentsAxios from "../axios/comments";
import postsAxios from "../axios/posts";

const TestPage = () => {
  const handleGetPostsButtonClick = async () => {
    const { data } = await postsAxios.get();
    console.log(data);
  };

  const handleGetCommentsButtonClick = async () => {
    try {
      const { data } = await commentsAxios.get();
      console.log(data);
    } catch (error) {
      // alert(error.response.data.message);
      // console.log(error);
      alert("알 수 없는 문제가 발생했습니다. 고객센터로 연락주세요.");
    }
  };

  return (
    <div>
      <h1>Test Page</h1>
      <p>api 테스트를 진행합니다.</p>
      <button onClick={handleGetPostsButtonClick}>
        posts 데이터 가져오기(로그인 불필요)
      </button>
      <button onClick={handleGetCommentsButtonClick}>
        comments 데이터 가져오기(로그인 필요)
      </button>
    </div>
  );
};

export default TestPage;
