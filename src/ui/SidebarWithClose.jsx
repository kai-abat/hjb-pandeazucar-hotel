import styled, { css } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useApp } from "../context/AppContext";
import { useOutsideClick } from "../hooks/useOutsideClick";
import ButtonSideBar from "./ButtonSideBar";
import LogoContainer from "./LogoContainer";
import { DEVICE_MIN_W } from "../utils/constants";

const StyleSidebar = styled.aside`
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  /* padding: 3.2rem 2.4rem; */

  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  transition: all 300ms ease 50ms;

  @media ${DEVICE_MIN_W.mobileS} {
    padding: 1rem 0.5rem;
    width: 335px;
  }

  @media ${DEVICE_MIN_W.mobileM2} {
    width: 450px;
  }
  @media ${DEVICE_MIN_W.tablet} {
    padding: 1.4rem 2rem;
  }

  min-height: 100dvh;
  z-index: 12 !important;

  ${(props) =>
    !props.$show
      ? css`
          box-shadow: none;
          /* transform: translateX(-100%), opacity: 0.2 ; */
          transform: translateX(-100%);
        `
      : css`
          /* transform: translateX(0%), opacity: 1; */
          transform: opacity: 1;
          transform: translateX(0%);

          box-shadow: var(--shadow-md);
        `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100dvh;
  /* backdrop-filter: blur(2px); */
  z-index: 1000;
  transition: all 100ms linear;
  ${(props) =>
    !props.$show
      ? css`
          transform: translateX(-100%);
          /* transform: opacity: 0.2 ; */
          backdrop-filter: blur(0);
        `
      : css`
          transform: translateX(0);
          /* transform: opacity: 1; */
          backdrop-filter: blur(2px);
        `}
`;

function SidebarWithClose() {
  const { showNav, toggleNavBar } = useApp();

  const ref = useOutsideClick(toggleNavBar);

  return (
    <Overlay $show={showNav}>
      <StyleSidebar ref={showNav ? ref : null} $show={showNav}>
        <LogoContainer>
          <ButtonSideBar />
          <Logo pos="sidebar" />
        </LogoContainer>
        <MainNav />

        {/* <Uploader /> */}
      </StyleSidebar>
    </Overlay>
  );
}

export default SidebarWithClose;
