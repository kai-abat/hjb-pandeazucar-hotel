import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import CabinCard from "../features/cabins/CabinCard";
import { useSearchParams } from "react-router-dom";
import {
  DEVICE_SCREEN,
  DISPLAY_MODE,
  DISPLAY_MODE_M,
} from "../utils/constants";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useDisplayMode from "../hooks/useDisplayMode";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  const { width: vpWidth } = useWindowDimensions();
  const { mode, currentMode } = useDisplayMode();

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
      </Row>

      <Row id="cabin-nav-buttons">
        <AddCabin />
      </Row>

      <Row>
        {currentMode === "table" && <CabinTable />}
        {currentMode === "card" && <CabinCard />}
      </Row>
    </>
  );
}

export default Cabins;
