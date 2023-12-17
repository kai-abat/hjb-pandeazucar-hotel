import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled, { css } from "styled-components";
import { useApp } from "../context/AppContext";
import { DEVICE_MAX_W } from "../utils/constants";
import SidebarWithClose from "./SidebarWithClose";

const StyleAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;

  /* @media ${DEVICE_MAX_W.laptop} {
    grid-template-columns: 1fr;
  } */
`;

// const StyleAppLayout = styled.div`
//   display: flex;
//   overflow: auto;
//   flex-direction: column;
//   margin: 0;
//   /* @media only screen and (max-width: 1024px) {
//   } */
// `;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 1rem 3rem;
  /* overflow: scroll; */
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const { showNav } = useApp();
  return (
    <>
      <StyleAppLayout>
        {/* <Sidebar /> */}
        <Header />
        <SidebarWithClose />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyleAppLayout>
    </>
  );
}

export default AppLayout;
