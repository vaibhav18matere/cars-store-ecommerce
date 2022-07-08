import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};

export default RequiresAuth;
