import React from "react";
import { Navigate } from "react-router-dom";
import {useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.AuthenticationReducer);
  if (isLoggedIn === undefined) {
    const currentuser = localStorage.getItem("user");
    if (currentuser["token"]) {
      isLoggedIn = true;
    }
  }
  const isAuthincate = isLoggedIn;
  return isAuthincate ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
