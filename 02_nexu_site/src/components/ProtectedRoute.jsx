import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/Authcontext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
