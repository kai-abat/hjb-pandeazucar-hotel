import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking as updateBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBookingAPI(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully check in!`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (err) => {
      toast.error("There was an error while checking in!");
    },
  });

  return { isCheckingIn, checkin };
};
