import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/RegisterPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
