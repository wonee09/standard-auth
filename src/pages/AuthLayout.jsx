import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  // TODO: (1) localStorage에 accessToken이 존재하는지 확인
  // TODO: (2) at이 존재한다면 유효한지 확인
  // TODO: (3) (1)번 또는 (2)번이 실패한 경우, 로그인페이지로 이동
  // TODO: (4) 성공한 경우, 비로소 아래를 렌더링(return 이하)

  const navigate = useNavigate();

  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    // 렌더링이 완료됐을 때 검증해보자

    const checkAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");

      try {
        const { data } = await axios.get(
          "https://moneyfulpublicpolicy.co.kr/user",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setIsRender(true);
      } catch (error) {
        alert("알 수 없는 오류가 발생하였습니다.");
        // localStorage.removeItem
        navigate("/login");
      }
    };

    checkAuth();
  }, []);

  const isAuthenticated = localStorage.getItem("accessToken") ? true : false;

  if (isAuthenticated === false) {
    alert("로그인이 필요합니다! 로그인 페이지로 이동할께요.");
    return <Navigate to="/login" replace />;
  }

  if (!isRender) {
    return null;
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

export default AuthLayout;
