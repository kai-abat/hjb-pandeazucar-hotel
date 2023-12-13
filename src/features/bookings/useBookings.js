import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export const useBookings = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  // 1. Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };
  // 2, Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // 3. Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query
  const queryData = useQuery({
    queryKey: ["bookings", filter, sortBy, page], // add the filter value to queryKey so everytime filter change value then react query will refetch the data similar to dependency array of useEffect hook
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  const { isLoading, data: { data: bookings, count } = {}, error } = queryData;

  // Pre-Fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1], // add the filter value to queryKey so everytime filter change value then react query will refetch the data similar to dependency array of useEffect hook
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1 && page <= pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1], // add the filter value to queryKey so everytime filter change value then react query will refetch the data similar to dependency array of useEffect hook
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, bookings, count };
};
