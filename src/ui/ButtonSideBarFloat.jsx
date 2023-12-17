import { DEVICE_MAX_W } from "../utils/constants";
import styled, { css } from "styled-components";

const ButtonSideBarFloat = styled.button`
  display: none;
  @media ${DEVICE_MAX_W.laptop} {
    position: absolute;
    top: 60%;
    right: -40px;
    display: block;
    background: var(--color-brand-600);
    border: none;
    padding: 0.6rem;
    border-radius: var(--border-radius-sm);
    transition: all 0.2s;
    /* height: 5rem;
    width: 6rem; */

    &:hover {
      background-color: var(--color-brand-700);
      ${(props) =>
        !props.show &&
        css`
          right: -60px;
        `}
    }

    & svg {
      width: 3rem;
      height: 3rem;
      color: var(--color-brand-50);
    }
  }
`;

export default ButtonSideBarFloat;
