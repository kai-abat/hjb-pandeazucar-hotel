import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// function AddCabin() {
//   const [openModal, setOpenModal] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {openModal && (
//         <Modal onClose={() => setOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opensWindowName="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
