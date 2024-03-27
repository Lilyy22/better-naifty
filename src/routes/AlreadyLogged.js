import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AlreadyLogged = () => {
  const { accessToken } = useContext(AuthContext);
  return accessToken !== null ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default AlreadyLogged;
