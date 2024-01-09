import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

export const useAnonLogin = () => {
  const { setIsUserMode } = useApp();
  const navigate = useNavigate();

  const anonLogin = () => {
    setIsUserMode(false);
    toast.success(`You are logging in as anonymous user.`);
    navigate("/dashboard");
  };

  return anonLogin;
};
