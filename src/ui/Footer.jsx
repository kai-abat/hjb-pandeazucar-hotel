import { Icon } from "@iconify/react";
import styled from "styled-components";
import HotelPhoto from "./HotelPhoto";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem 4rem 4rem;
  border-top: 1px solid var(--color-grey-100);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
`;

const TechIconsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

function Footer() {
  const width = 36;
  return (
    <StyledFooter>
      <HotelPhoto src="logo.png" alt="" />
      <FooterContent>
        <span>{`© ${new Date().getFullYear()} HJB Pan de Azucar Hotel, Inc.`}</span>
        <TechIconsContainer>
          <Icon icon="vscode-icons:file-type-vite" width={width} />
          <Icon icon="logos:react" width={width} />
          <Icon icon="devicon:reactrouter" width={width} />
          <Icon icon="skill-icons:styledcomponents" width={width} />
          <Icon icon="logos:react-query-icon" width={width} />
          <Icon icon="logos:supabase-icon" width={width} />
        </TechIconsContainer>
      </FooterContent>
    </StyledFooter>
  );
}

export default Footer;
