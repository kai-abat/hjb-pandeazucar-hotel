import styled, { css } from "styled-components";

const Container = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
  ${(props) =>
    props.direction === "column"
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}
`;

export default Container;
