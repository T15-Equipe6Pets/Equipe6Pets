import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "../pages/ProtectRoute/ProtectRoute";
import { Register } from "../pages/RegisterPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/shop" element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/" element={<Login />} />
    </Routes>
  );
}
