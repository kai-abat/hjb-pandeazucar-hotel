import styled from "styled-components";
import { DEVICE_MIN_W } from "../utils/constants";
import Heading from "./Heading";

const CommonDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Container = styled(CommonDiv)`
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
`;

const StyledContent = styled(CommonDiv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Card = ({ children }) => {
  return <Container id="card">{children}</Container>;
};

const Image = ({ imageSrc, name }) => {
  return <Img src={imageSrc} alt={name} />;
};
const Title = ({ children }) => {
  return (
    <StyledTitle>
      <Heading as="h3">{children}</Heading>
    </StyledTitle>
  );
};
const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

Card.Image = Image;
Card.Title = Title;
Card.Content = Content;

export default Card;
