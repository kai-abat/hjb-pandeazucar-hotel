import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
import DisplayMode from "../../ui/DisplayMode";
import useDisplayMode from "../../hooks/useDisplayMode";

function CabinTableOperations() {
  const { mode, currentMode } = useDisplayMode();
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      ></Filter>
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (low first)" },
          { value: "regularPrice-desc", label: "Sort by Price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by Capacity (high first)" },
        ]}
      />
      <DisplayMode
        modeField={mode.modeField}
        options={mode.options}
        currentMode={currentMode}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
