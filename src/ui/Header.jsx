import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { DEVICE_MAX_W, DEVICE_MIN_W } from "../utils/constants";
import Logo from "./Logo";
import ButtonSideBar from "./ButtonSideBar";
import LogoContainer from "./LogoContainer";

const StyleHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  grid-row: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${DEVICE_MIN_W.mobileS} {
    padding: 1rem 0.5rem;
    gap: 1rem;
    justify-content: flex-start;
  }

  @media ${DEVICE_MIN_W.tablet} {
    padding: 1.4rem 2rem;
    gap: 2.4rem;
    justify-content: space-between;
  }
`;

const HeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  flex-basis: content;

  @media ${DEVICE_MIN_W.mobileS} {
    padding: 0 0.5rem;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  @media ${DEVICE_MIN_W.mobileM2} {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  @media ${DEVICE_MIN_W.tablet} {
    padding: 0;
    justify-content: flex-end;
  }
`;

function Header() {
  return (
    <StyleHeader>
      <LogoContainer>
        <ButtonSideBar />
        <Logo pos="header" />
      </LogoContainer>
      <HeaderMenuContainer>
        <UserAvatar />
        <HeaderMenu />
      </HeaderMenuContainer>
    </StyleHeader>
  );
}

export default Header;
