import React from "react";
import { Outlet } from "react-router-dom";

const SampleLayout = () => {
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
