import styled, { css } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useApp } from "../context/AppContext";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { DEVICE_MAX_W } from "../utils/constants";

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 3.2rem 2.4rem;
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: all 0.3s ease;

  @media ${DEVICE_MAX_W.tablet} {
    width: 26rem;
    height: 100dvh;
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 12 !important;

    box-shadow: var(--shadow-md);
    ${(props) =>
      !props.show
        ? css`
            box-shadow: none;
            transform: translateX(-100%);
          `
        : css`
            transform: translateX(0%);
          `}
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  position: relative;
`;

const NavBarButton = styled.button`
  display: none;
  @media ${DEVICE_MAX_W.tablet} {
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

function Sidebar() {
  const { showNav, toggleNavBar } = useApp();

  // const handleToggleNavBar = () => {
  //   if (!showNav) return;
  //   toggleNavBar();
  // };
  const ref = useOutsideClick(toggleNavBar);
  return (
    <StyleSidebar ref={showNav ? ref : null} show={showNav}>
      <LogoWrapper>
        <Logo $pos="sidebar" />
        <NavBarButton show={showNav} onClick={toggleNavBar}>
          {showNav ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </NavBarButton>
      </LogoWrapper>
      <MainNav />

      {/* <Uploader /> */}
    </StyleSidebar>
  );
}

export default Sidebar;
