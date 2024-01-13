import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import CabinCard from "../features/cabins/CabinCard";
import { useSearchParams } from "react-router-dom";
import { DISPLAY_MODE } from "../utils/constants";
import useWindowDimensions from "../hooks/useWindowDimensions";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  const { width: vpWidth } = useWindowDimensions();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentMode =
    searchParams.get(DISPLAY_MODE.modeField) ||
    DISPLAY_MODE.options.at(0).value;

  const operationType = vpWidth < 1300 ? "vertical" : "horizontal";

  // TEST Side Effect fetching cabins from supabase api
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);
  return (
    <>
      <Row id="operations" type={operationType}>
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
        {/* <img
        src="https://kighqptumqibztqeobqm.supabase.co/storage/v1/object/public/cabin/cabin-001.jpg"
        alt="cabin1"
      /> */}
      </Row>

      <Row>
        {currentMode === "table" && <CabinTable />}
        {currentMode === "card" && <CabinCard />}

        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
