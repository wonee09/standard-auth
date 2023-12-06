import React from "react";
import { Navigate, Outlet } from "react-router-dom";

//React 컴포넌트의 렌더링 로직 중간에 다른 페이지로 이동하려고 하면 예상치 못한 동작이나
// 오류가 발생할 수 있습니다. 이는 React의 렌더링 프로세스가 완료되기 전에 페이지가 전환되어
// 렌더링 프로세스가 중단되기 때문입니다.
const SampleLayout = () => {
  const isAuthenticated = localStorage.getItem("accessToken") ? true : false;

  if (!isAuthenticated) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Sample Layout</h1>
      <p>Sample Layout</p>
      <main>
        <Outlet /> {/* render child routes */}
      </main>
    </div>
  );
};

export default SampleLayout;
