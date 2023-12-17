import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import Heading from "./Heading";

const StyledLogo = styled(NavLink)`
  /* text-align: center; */
  font-family: "Mate SC", "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${(props) =>
    props.$pos === "sidebar" &&
    css`
      flex-direction: column;
    `}
`;

const Img = styled.img`
  display: block;
  width: 15rem;
  height: 10rem;
  /* aspect-ratio: 1; */
  object-fit: cover;
  object-position: center;
  border-radius: 50%;

  ${(props) =>
    props.$pos === "header" &&
    css`
      width: 7rem;
      height: 6rem;
    `}

  outline: 2px solid var(--color-grey-100);
`;

function Logo({ pos }) {
  // const { isDarkMode } = useDarkMode();
  // const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  const src = "/logo.png";
  const textSize = pos === "header" ? "h5" : "h6";

  return (
    <StyledLogo $pos={pos} to="/">
      {/* {pos !== "header" && (
        <Img
          $pos={pos}
          src={src}
          title="HJB Pande de Azucar Hotel"
          alt="Logo"
        />
      )} */}
      <Heading as="h5">HJB Pan de Azucar Hotel</Heading>
    </StyledLogo>
  );
}

export default Logo;
