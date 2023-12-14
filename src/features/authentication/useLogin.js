import { useMutation } from "@tanstack/react-query";
import { login as LoginAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginAPI({ email, password }),
    onSuccess: (data) => {
      console.log(data);
      const { user } = data;
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
