import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 0.6rem 0.5rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  /* background-color: var(--color-brand-600); */
  /* color: var(--color-brand-50); */
  font-weight: 500;
  /* box-shadow: var(--shadow-sm); */
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
