import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          {localStorage.getItem("accessToken") ? (
            <button
              onClick={() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("userId");
                localStorage.removeItem("nickname");
                navigate("/");
              }}
            >
              로그아웃
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인하러가기
            </button>
          )}
        </li>
        <li>
          <Link to="/user/1">User 1</Link>
        </li>
        <li>
          <Link to="/user/2">User 2</Link>
        </li>
        <li>
          <Link to="/user/3">User 3</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/sample/page1">Sample Page 1</Link>
        </li>
        <li>
          <Link to="/sample/page2">Sample Page 2</Link>
        </li>
        <li>
          <Link to="/testPage">Test Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
