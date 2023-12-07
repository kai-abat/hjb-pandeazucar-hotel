import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  // TEST Side Effect fetching cabins from supabase api
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* <img
        src="https://kighqptumqibztqeobqm.supabase.co/storage/v1/object/public/cabin/cabin-001.jpg"
        alt="cabin1"
      /> */}
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
