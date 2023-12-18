import styled, { css } from "styled-components";
import { DEVICE_MAX_W } from "../utils/constants";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      @media ${DEVICE_MAX_W.tablet} {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};
export default Row;
