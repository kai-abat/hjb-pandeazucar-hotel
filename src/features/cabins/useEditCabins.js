import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin as createEditCabinAPI } from "../../services/apiCabins";

export const useEditCabins = () => {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabinAPI(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message + "editing!");
    },
  });
  return { isEditing, editCabin };
};
