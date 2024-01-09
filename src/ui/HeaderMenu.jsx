import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useApp } from "../context/AppContext";
import Login from "../features/authentication/Login";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { isUserMode } = useApp();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>{isUserMode ? <Logout /> : <Login />}</li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
