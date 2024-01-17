import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabins } from "./useDeleteCabins";
import { useCreateCabins } from "./useCreateCabins";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import CabinPhotoViewer from "./CabinPhotoViewer";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(1px);
  /* padding: 0.1rem; */
  cursor: pointer;
`;

const Cabin = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Capacity = styled.div`
  font-size: 1.1em;
  font-weight: 400;
  color: var(--color-grey-600);
  /* font-family: "Sono"; */
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin, index }) {
  const { isDeleting, deleteCabin } = useDeleteCabins(cabin);
  const { isCreating, createCabin } = useCreateCabins();

  const {
    id: cabinId,
    name,
    regularPrice,
    discount,
    image,
    maxCapacity,
    description,
  } = cabin;

  const handleDuplicate = () => {
    createCabin({
      name: `Copy of ${name}`,
      regularPrice,
      discount,
      image,
      maxCapacity,
      description,
    });
  };

  return (
    <>
      <Table.Row index={index}>
        <Modal>
          <Modal.Open opensWindowName="cabin-photo-viewer">
            <Img src={image} alt={name} />
          </Modal.Open>
          <Cabin>{name}</Cabin>
          <Capacity>Fits up to {maxCapacity} guest</Capacity>
          <Price>{regularPrice}</Price>
          {discount ? <Discount>{formatCurrency(discount)}</Discount> : "-"}
          <div>
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />
              <Menus.List id={cabinId}>
                {/* Duplicate Button */}
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={handleDuplicate}
                  disabled={isCreating}
                >
                  Duplicate
                </Menus.Button>
                {/* Edit Button */}
                <Modal.Open opensWindowName="edit-cabin-form">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                {/* Delete Button */}
                <Modal.Open opensWindowName="delete-cabin">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              {/* Show Photo Viewer */}
              <Modal.Window name="cabin-photo-viewer">
                <CabinPhotoViewer image={image} />
              </Modal.Window>
              {/* Modal Edit */}
              <Modal.Window name="edit-cabin-form">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>
              {/* Modal Delete */}
              <Modal.Window name="delete-cabin">
                <ConfirmDelete
                  resourceName="cabin"
                  disabled={isDeleting}
                  onConfirm={() => deleteCabin(cabinId, name)}
                />
              </Modal.Window>
            </Menus.Menu>
          </div>
        </Modal>
      </Table.Row>
      {/* {showForm && <CreateCabinForm cabinToEdit={cabin} />} */}
    </>
  );
}

export default CabinRow;
