import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as LoginAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

// Use React query useMutation to effectively store the session data to the cache
export const useLogin = () => {
  const { setIsUserMode } = useApp();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginAPI({ email, password }),
    onSuccess: ({ session, user }) => {
      queryClient.setQueryData(["user", user]); // store the user data immediately to the cache of react query
      setIsUserMode(true);
      toast.success(`Welcome back!, User ${user.email} 😊`);
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error("Provided email and password are incorrect!");
      console.log("ERROR:", err);
    },
  });
  return { login, isLoading };
};
