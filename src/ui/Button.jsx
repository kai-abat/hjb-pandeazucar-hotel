import styled, { css } from "styled-components";

const sizes = {
  small: css`
    /* font-size: 1em; */
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.1em;
    padding: 0.7rem 2rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.2em;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-700);

    &:hover {
      background-color: var(--color-brand-800);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const types = {
  text_icon: css`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  `,
};
const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  min-width: max-content;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.$variation]}
  ${(props) => types[props.type]}
`;

Button.defaultProps = {
  size: "medium",
  $variation: "primary",
  type: "text",
};

export default Button;
