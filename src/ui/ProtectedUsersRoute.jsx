import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedUsersRoute = ({ children }) => {
  const { isUserMode } = useApp();
  const navigate = useNavigate();

  // if (!isUserMode) {
  //   toast.error("You must login first to access users page!");
  //   navigate("/");
  //   return null;
  // }

  useEffect(() => {
    if (!isUserMode) {
      navigate("/");
    }
  }, [isUserMode, navigate]);

  if (isUserMode) return children;
};

export default ProtectedUsersRoute;
