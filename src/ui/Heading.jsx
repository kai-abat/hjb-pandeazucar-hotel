import styled, { css } from "styled-components";

const Heading = styled.h1`
  min-width: max-content;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 280%;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 250%;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 200%;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 150%;
      font-weight: 500;
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 125%;
      font-weight: 400;
    `}
    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 115%;
      font-weight: 300;
    `}
`;

export default Heading;
