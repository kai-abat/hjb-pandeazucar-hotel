import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  // TEST Side Effect fetching cabins from supabase api
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
        {/* <img
        src="https://kighqptumqibztqeobqm.supabase.co/storage/v1/object/public/cabin/cabin-001.jpg"
        alt="cabin1"
      /> */}
      </Row>

      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
