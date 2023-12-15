import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser as updateCurrentUserAPI } from "../../services/apiAuth";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUserAPI,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user); // update cache
      // queryClient.invalidateQueries({
      //   queryKey: ["user"],
      // });
    },
    onError: (err) => {
      toast.error(err.message + "updating!");
    },
  });
  return { isUpdating, updateUser };
};
