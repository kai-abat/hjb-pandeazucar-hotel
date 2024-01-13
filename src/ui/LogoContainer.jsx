import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-basis: content;

  @media ${DEVICE_MIN_W.mobileS} {
    width: 100%;
    gap: 1rem;
  }
  @media ${DEVICE_MIN_W.mobileM} {
    gap: 2.4rem;
  }
  @media ${DEVICE_MIN_W.tablet} {
    width: 400px;
    gap: 2.4rem;
  }
`;

export default LogoContainer;
