import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  const { width: vpWidth } = useWindowDimensions();
  const operationType = vpWidth < 1300 ? "vertical" : "horizontal";
  return (
    <>
      <Row type={operationType}>
        <Heading as="h2">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
