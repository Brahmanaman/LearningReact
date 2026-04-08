import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const AuthLayout = () => {
  const { loggedInUser } = useAuth();
  if (loggedInUser) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
