import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 20rem;
  width: auto;
`;

function Logo() {
  // const { isDarkMode } = useDarkMode();

  // const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  const src = "/logo.jpg";
  return (
    <StyledLogo>
      <Link to="/">
        <Img src={src} title="HJB Pande de Azucar Hotel" alt="Logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
