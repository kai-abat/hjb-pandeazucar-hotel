import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 1.2rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--color-brand-600);
  }

  /* height: ${(props) => props.$height && props.$height}px; */
`;

export default ButtonIcon;
