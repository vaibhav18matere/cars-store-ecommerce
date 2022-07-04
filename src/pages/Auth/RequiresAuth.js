import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default RequiresAuth;
