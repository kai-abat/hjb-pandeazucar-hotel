import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";
import { MdOutlineDiscount } from "react-icons/md";
import { DEVICE_MIN_W } from "../utils/constants";

const Container = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  @media ${DEVICE_MIN_W.tablet} {
    font-size: 1.4em;
  }
`;

const FinalPrice = styled.span`
  color: var(--color-indigo-700);
`;
const OrigPriceDisc = styled.span`
  text-decoration: line-through;
`;

const DiscountContainer = styled.span`
  color: var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75em;
`;

const Price = ({ origPrice, discount }) => {
  const finalPrice = discount ? origPrice - discount : origPrice;

  return (
    <Container>
      <FinalPrice>{formatCurrency(finalPrice)}</FinalPrice>
      {discount > 0 && (
        <DiscountContainer>
          <OrigPriceDisc>{formatCurrency(origPrice)}</OrigPriceDisc>
          <span>&#40;</span>
          <MdOutlineDiscount />
          <span>{formatCurrency(discount)}</span>
          <span>OFF &#41;</span>
        </DiscountContainer>
      )}
    </Container>
  );
};

export default Price;
