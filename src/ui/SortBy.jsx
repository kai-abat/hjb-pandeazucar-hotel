import Select from "./Select";
import { useUrl } from "../hooks/useUrl";
import Container from "./Container";

function SortBy({ options }) {
  const fieldValue = "sortBy";
  const { handler: handleChange, searchParams } = useUrl(fieldValue);
  const sortBy = searchParams.get(fieldValue);

  return (
    <Container direction="row">
      <Select
        options={options}
        type="white"
        value={sortBy === null ? "" : sortBy}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Container>
  );
}

export default SortBy;
