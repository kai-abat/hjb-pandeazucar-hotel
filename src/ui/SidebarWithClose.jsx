import styled, { css } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useApp } from "../context/AppContext";
import { useOutsideClick } from "../hooks/useOutsideClick";
import ButtonSideBar from "./ButtonSideBar";

const StyleSidebar = styled.aside`
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  /* padding: 3.2rem 2.4rem; */
  padding: 1.4rem 2rem;
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* transition: all 3s ease; */

  width: 35rem;
  min-height: 100dvh;
  z-index: 12 !important;

  box-shadow: var(--shadow-md);
  ${(props) =>
    !props.$show &&
    css`
      box-shadow: none;
      /* transform: translateX(-100%); */
    `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100dvh;
  backdrop-filter: blur(2px);
  z-index: 1000;
  transition: all 0.2s ease 50ms;
  ${(props) =>
    !props.$show
      ? css`
          transform: translateX(-100%);
        `
      : css`
          transform: translateX(0%);
        `}
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

function SidebarWithClose() {
  const { showNav, toggleNavBar } = useApp();

  // const handleToggleNavBar = () => {
  //   if (!showNav) return;
  //   toggleNavBar();
  // };
  const ref = useOutsideClick(toggleNavBar);
  // return (
  //   <StyleSidebar ref={showNav ? ref : null} $show={showNav}>
  //     <LogoDiv>
  //       <ButtonSideBar />
  //       <Logo pos="sidebar" />
  //     </LogoDiv>
  //     <MainNav />

  //     {/* <Uploader /> */}
  //   </StyleSidebar>
  // );

  return (
    <Overlay $show={showNav}>
      <StyleSidebar ref={showNav ? ref : null} $show={showNav}>
        <LogoDiv>
          <ButtonSideBar />
          <Logo pos="sidebar" />
        </LogoDiv>
        <MainNav />

        {/* <Uploader /> */}
      </StyleSidebar>
    </Overlay>
  );
}

export default SidebarWithClose;
