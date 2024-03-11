import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
  const { accessToken } = useContext(AuthContext);
  return accessToken !== null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
