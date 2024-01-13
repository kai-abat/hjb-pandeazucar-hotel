import { useSearchParams } from "react-router-dom";
import Container from "./Container";
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 2rem; // control svg size
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;
  & svg {
    color: var(--color-brand-600);
  }
`;

const DisplayMode = ({ modeField, options, currentMode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (value) => {
    searchParams.set(modeField, value);
    setSearchParams(searchParams);
  };

  return (
    <Container direction="row">
      {options.map(
        (opt) =>
          opt.value !== currentMode && (
            <Button key={opt.value} onClick={() => handleClick(opt.value)}>
              <opt.icon />
            </Button>
          )
      )}
    </Container>
  );
};

export default DisplayMode;
