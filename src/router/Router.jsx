import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ApplyJob from "../pages/ApplyJob";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/applyJob/:id" element={<ApplyJob />} />
    </Routes>
  );
};

export default Router;
