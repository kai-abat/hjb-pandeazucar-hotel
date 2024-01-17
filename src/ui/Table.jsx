import { createContext, useContext } from "react";
import styled, { keyframes } from "styled-components";

const staggerDelay = "50ms";
const rowEntrance = keyframes`
  from {
    opacity: 0;
    /* transform: scale(0.3); */
    transform: translateY(-50%);
    filter: hue-rotate(180deg);
  }
  to {
    opacity: 1;
    /* transform: scale(1); */
    filter: hue-rotate(0deg);
  }
`;

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.2em;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: auto;
  min-width: 10rem;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  /* transition: none; */
  animation: ${rowEntrance} 700ms ease-out;
  animation-fill-mode: backwards;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-brand-600);
  border-bottom: 1px solid var(--color-grey-300);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: 600;
  color: var(--color-grey-0H);
  animation-delay: calc(1 * ${staggerDelay});
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;
  animation-delay: calc(${(props) => props.$index} * ${staggerDelay});
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable id="table" role="table">
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader id="header" role="row" $columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ index, children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow $index={index} id="row" role="row" $columns={columns}>
      {children}
    </StyledRow>
  );
}
function Body({ data, render }) {
  if (!data.length) return <Empty>No data for the moment</Empty>;
  return <StyledBody id="body">{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
