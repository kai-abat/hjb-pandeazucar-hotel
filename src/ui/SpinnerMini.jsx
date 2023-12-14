import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledSpinnerMini = styled(BiLoaderAlt)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

function SpinnerMini({ label = "" }) {
  return (
    <Container>
      <StyledSpinnerMini />
      {label && <span>{label}</span>}
    </Container>
  );
}

export default SpinnerMini;
