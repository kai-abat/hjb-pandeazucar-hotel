import Select from "./Select";
import { useUrl } from "../hooks/useUrl";

function SortBy({ options }) {
  const fieldValue = "sortBy";
  const { handler: handleChange, searchParams } = useUrl(fieldValue);
  const sortBy = searchParams.get(fieldValue);

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

export default SortBy;
