import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      <nav>
        <ul>
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
        </ul>
      </nav>
    </div>
  );
};

export default Home;
