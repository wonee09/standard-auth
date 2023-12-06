import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "../pages/AuthLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SearchPage from "../pages/SearchPage";
import SignupPage from "../pages/SignupPage";
import TestPage from "../pages/TestPage";
import UserProfilePage from "../pages/UserProfilePage";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          {/* 반드시 로그인 되어야만 들어올 수 있는 곳 */}
          <Route path="page1" element={<div>Sample Page 1</div>} />
          <Route path="page2" element={<div>Sample Page 2</div>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/testPage" element={<TestPage />} />
      </Routes>
    </Router>
  );
}
