import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import CabinCards from "../features/cabins/CabinCards";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useDisplayMode from "../hooks/useDisplayMode";
import Modal from "../ui/Modal";
import CabinPhotoViewer from "../features/cabins/CabinPhotoViewer";

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
      <Modal>
        <Row id="operations" type={operationType}>
          <Modal.Open opensWindowName="cabin-photo-viewer">
            <Heading as="h1">All cabins</Heading>
          </Modal.Open>

          <CabinTableOperations />
        </Row>
        <Modal.Window name="cabin-photo-viewer">
          <CabinPhotoViewer />
        </Modal.Window>
      </Modal>

      <Row id="cabin-nav-buttons">
        <AddCabin />
      </Row>

      <Row>
        {currentMode === "table" && <CabinTable />}
        {currentMode === "card" && <CabinCards />}
      </Row>
    </>
  );
}

export default Cabins;
