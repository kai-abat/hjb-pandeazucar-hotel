import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => logoutAPI(),
    onSuccess: () => {
      queryClient.removeQueries(); // delete all the cache store in react query
      toast.success("Successfully logged out");
      navigate("/login", { replace: true }); // redirect back to login page
    },
  });

  return { logout, isLoading };
};
