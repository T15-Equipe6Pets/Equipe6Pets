import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
};
