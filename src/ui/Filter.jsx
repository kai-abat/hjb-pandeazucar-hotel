import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Container from "./Container";
import { DEVICE_MIN_W } from "../utils/constants";
import Button from "./Button";

const FilterButton = styled.button`
  background-color: var(--color-grey-50);
  padding: 0.7rem 2rem;
  border: none;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  /* To give the same height as select */
  /* padding: 0.7rem 0.8rem; */
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
  @media ${DEVICE_MIN_W.mobileS} {
    width: 100%;
  }
  @media ${DEVICE_MIN_W.mobileL} {
    min-width: 8rem;
    /* width: max-content; */
    /* width: 100%; */
    width: fit-content;
  }
`;

function Filter({ filterField, options }) {
  // store to url
  const [searchParams, setSearchParams] = useSearchParams();
  // const { handler: handleClick, searchParams } = useUrl(filterField);
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <Container direction="row">
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={option.value}
          $active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </Container>
  );
}

export default Filter;
