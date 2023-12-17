import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { HiBars3, HiOutlineBars3 } from "react-icons/hi2";
import { useApp } from "../context/AppContext";
import { DEVICE_MAX_W } from "../utils/constants";
import Logo from "./Logo";
import ButtonSideBar from "./ButtonSideBar";

const StyleHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.4rem 2rem;
  border-bottom: 1px solid var(--color-grey-100);
  grid-row: 1;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  /* justify-content: flex-end; */
  justify-content: space-between;
  @media ${DEVICE_MAX_W.laptop} {
  }
`;

const HeaderMenuContainer = styled.div`
  background: none;
  display: flex;
  gap: 2.4rem;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

function Header() {
  return (
    <StyleHeader>
      <LogoDiv>
        <ButtonSideBar />
        <Logo pos="header" />
      </LogoDiv>
      <HeaderMenuContainer>
        <UserAvatar />
        <HeaderMenu />
      </HeaderMenuContainer>
    </StyleHeader>
  );
}

export default Header;
