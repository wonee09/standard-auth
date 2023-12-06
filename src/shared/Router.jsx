import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SampleLayout from "../pages/SampleLayout";
import SearchPage from "../pages/SearchPage";
import UserProfilePage from "../pages/UserProfilePage";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/sample" element={<SampleLayout />}>
          <Route path="page1" element={<div>Sample Page 1</div>} />
          <Route path="page2" element={<div>Sample Page 2</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
