import { useSearchParams } from "react-router-dom";
import { useCabins } from "./useCabins";
import { sortByDirection } from "../../utils/helpers";

export const useFilterCabins = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  // if (isLoading) return isLoading;

  // if (!cabins.length) return <Empty resource="cabins" />;

  const filterCabin = () => {
    if (!cabins.length) return null;
    const filterValue = searchParams.get("discount") || "all";

    // Filtering in Client Side
    // 1. Filter
    let filteredCabins;
    if (filterValue === "all") filteredCabins = cabins;
    if (filterValue === "no-discount")
      filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
    if (filterValue === "with-discount")
      filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
    // 2. Sort
    const sortBy = searchParams.get("sortBy") || "startDate-asc";
    const [field, direction] = sortBy.split("-");
    // const modifier = direction === "asc" ? 1 : -1;
    // const sortedCabins = filteredCabins.sort(
    //   (a, b) => (a[field] - b[field]) * modifier
    // );
    const sortedCabins = sortByDirection(direction, field, filteredCabins);

    return sortedCabins;
  };

  return { isLoading, filterCabin };
};
