import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useApp } from "../../context/AppContext";

export const useUser = () => {
  const { isUserMode } = useApp();

  console.log("useUser, isUserMode:", isUserMode);
  // useQuery function fetch the data from the react query cache
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    enabled: isUserMode,
  });

  if (!isUserMode)
    return { isLoading: false, user: undefined, isAuthenticated: "anonymous" };

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};
