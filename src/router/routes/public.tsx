import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth";

export const PublicRoute = ({ element }) => {
  const { user } = useAuthContext();

  if (user) return <Navigate to="/" />;

  return element;
};
