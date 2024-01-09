import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as createEditCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export const useCreateCabins = () => {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabinAPI,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isCreating, createCabin };
};
