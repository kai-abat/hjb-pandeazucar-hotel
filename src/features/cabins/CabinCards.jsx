import styled, { css } from "styled-components";
import Card from "../../ui/Card";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useFilterCabins } from "./useFilterCabins";
import Menus from "../../ui/Menus";
import CardInfo from "./CardInfo";

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

const CabinCards = () => {
  const { isLoading, filterCabin } = useFilterCabins();

  if (isLoading) return <Spinner />;

  const sortedCabins = filterCabin();

  if (!sortedCabins.length) return <Empty resource="cabins" />;

  return (
    <Container direction="row" id="cabin-card-container">
      {sortedCabins.map((cabin, index) => (
        <CardInfo cabin={cabin} key={index} />
      ))}
    </Container>
  );
};

export default CabinCards;
