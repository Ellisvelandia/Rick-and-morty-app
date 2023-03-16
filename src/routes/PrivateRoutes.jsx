import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  React.useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("isAuthenticated", "true");
    } else {
      localStorage.removeItem("isAuthenticated");
    }
  }, [isAuthenticated]);

  const hasSession = localStorage.getItem("isAuthenticated");

  return hasSession ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
