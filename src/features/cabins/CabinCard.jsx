import styled, { css } from "styled-components";
import Card from "../../ui/Card";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useFilterCabins } from "./useFilterCabins";
import { formatCurrency } from "../../utils/helpers";
import Heading from "../../ui/Heading";
import { MdOutlineDiscount } from "react-icons/md";
import ButtonIcon from "../../ui/ButtonIcon";
import Price from "../../ui/Price";
import { DEVICE_MIN_W } from "../../utils/constants";

const CommonDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
`;

const Container = styled.div`
  /* border: 1px solid var(--color-grey-100); */
  /* background-color: var(--color-grey-0); */
  /* box-shadow: var(--shadow-sm); */
  /* border-radius: var(--border-radius-sm); */
  padding: 0.4rem;
  display: flex;
  gap: 2rem;
  width: 100%;
  ${(props) =>
    props.direction === "column"
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}

  flex-wrap: wrap;
  justify-content: center;
`;

const Description = styled.div`
  text-indent: 10%;
  color: var(--color-grey-600);
  font-style: italic;
  letter-spacing: 0.05em;
  width: fit-content;
`;

const Capacity = styled.div`
  color: var(--color-grey-600);
  @media ${DEVICE_MIN_W.tablet} {
    font-size: 1.2em;
  }
`;

const CabinCard = () => {
  const { isLoading, filterCabin } = useFilterCabins();

  if (isLoading) return <Spinner />;

  const sortedCabins = filterCabin();

  if (!sortedCabins.length) return <Empty resource="cabins" />;

  return (
    <Container direction="row" id="cabin-card-container">
      {sortedCabins.map((cabin, index) => (
        <Card key={index}>
          <Card.Image imageSrc={cabin.image} alt={cabin.name} />
          <Card.Title>{cabin.name}</Card.Title>
          <Card.Content>
            <Description>{cabin.description}</Description>

            <Capacity>Fits up to {cabin.maxCapacity} guest</Capacity>

            <Price origPrice={cabin.regularPrice} discount={cabin.discount} />
          </Card.Content>
        </Card>
      ))}
    </Container>
  );
};

export default CabinCard;
