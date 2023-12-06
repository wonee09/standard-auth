import React from "react";
import { Link } from "react-router-dom";

const NAVIGATION = [
  {
    id: "1",
    url: "/user/1",
    name: "User 1",
  },
  {
    id: "2",
    url: "/user/2",
    name: "User 2",
  },
  {
    id: "3",
    url: "/user/3",
    name: "User 3",
  },
  {
    id: "4",
    url: "/search",
    name: "Search",
  },
  {
    id: "5",
    url: "/auth/page1",
    name: "Sample Page 1",
  },
  {
    id: "6",
    url: "/auth/page2",
    name: "Sample Page 2",
  },
  {
    id: "7",
    url: "/testPage",
    name: "테스트페이지",
  },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {NAVIGATION.map((menu) => {
          return (
            <li key={menu.id}>
              <Link to={`${menu.url}`}>{menu.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
