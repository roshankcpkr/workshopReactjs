import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
  return (
    <div>
      <h1>Protected Route</h1>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
