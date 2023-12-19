import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import SidebarWithClose from "./SidebarWithClose";
import Footer from "./Footer";

const StyleAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto auto;
  height: 100dvh;
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
  padding: 1rem 3rem 6rem 3rem;
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
        <Footer />
      </StyleAppLayout>
    </>
  );
}

export default AppLayout;
