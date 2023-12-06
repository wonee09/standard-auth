import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const isAuthenticated = /* 로그인 상태 확인 로직 */ 1;

  if (!isAuthenticated) {
    // 로그인 상태가 아닐 경우 로그인 페이지로 리다이렉션
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // 로그인 상태일 경우 해당 컴포넌트 렌더링
}

export default ProtectedRoute;
