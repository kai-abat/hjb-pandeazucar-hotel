import styled from "styled-components";
import { DEVICE_MIN_W } from "../utils/constants";

const StyledFormRow = styled.div`
  @media ${DEVICE_MIN_W.mobileS} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    &:has(button) {
      display: flex;
      justify-content: flex-end;

      @media ${DEVICE_MIN_W.mobileS} {
        & button {
          min-width: 100%;
        }

        align-items: center;
        /* flex-direction: column; */
        flex-direction: column-reverse;
      }

      @media ${DEVICE_MIN_W.tablet} {
        & button {
          min-width: inherit;
        }
        flex-direction: row;
      }
      gap: 1.2rem;
    }
  }
  @media ${DEVICE_MIN_W.laptop} {
    display: grid;
    align-items: center;
    grid-template-columns: 20rem 1.5fr 0.5fr;
    gap: 2.4rem;

    padding: 1.2rem 0;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-100);
    }

    &:has(button) {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      gap: 1.2rem;
    }
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  color: var(--color-red-700);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow id="form-row">
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
