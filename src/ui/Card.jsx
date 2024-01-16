import styled from "styled-components";
import { DEVICE_MIN_W } from "../utils/constants";
import Button from "./Button";

const CommonDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Container = styled(CommonDiv)`
  position: relative;
  padding: 2rem 1.5rem;
  gap: 1rem;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 7px;
  box-shadow: var(--shadow-sm);
  width: 100%;

  @media ${DEVICE_MIN_W.mobileS} {
    max-width: max-content;
  }
  @media ${DEVICE_MIN_W.tablet} {
    max-width: 70%;
  }
`;

const Img = styled.img`
  display: block;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  min-width: 10px;
  min-height: 10px;
  width: 100%;
  height: auto;
`;

const StyledTitle = styled(CommonDiv)`
  color: var(--color-indigo-700);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media ${DEVICE_MIN_W.tablet} {
    font-size: 1.4em;
  }
`;

const StyledContent = styled(CommonDiv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 40px;
  display: flex;
  /* justify-content: space-evenly; */
  /* justify-content: space-around; */
  justify-content: flex-start;
  align-items: end;
  flex-direction: column;

  flex-wrap: wrap;
  gap: 0.5rem;
  /* width: 100%; */
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.5rem 0.5rem;
  background-color: transparent;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  border-radius: var(--border-radius-full);
  min-width: max-content;
  gap: 0.5rem;
  font-size: 1.5em;

  & svg {
    color: var(--color-grey-0H);
  }
`;

const Card = ({ children }) => {
  return (
    <>
      <Container id="card">{children}</Container>
    </>
  );
};

const Image = ({ imageSrc, name, ...moreProps }) => {
  return <Img src={imageSrc} alt={name} {...moreProps} />;
};

const Title = ({ children }) => {
  return (
    <StyledTitle>
      {children}
      {/* <Heading as="h3">{children}</Heading> */}
    </StyledTitle>
  );
};
const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

const NavButtons = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

const CardButton = ({ label, icon, variation = "primary", ...moreProps }) => {
  return (
    <>
      <StyledButton
        $variation={variation}
        data-tooltip-id="tooltip-left"
        data-tooltip-content={label}
        {...moreProps}
      >
        {icon}
      </StyledButton>
    </>
  );
};

Card.Image = Image;
Card.Title = Title;
Card.Content = Content;
Card.NavButtons = NavButtons;
Card.Button = CardButton;

export default Card;
