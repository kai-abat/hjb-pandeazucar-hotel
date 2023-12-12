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

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Capacity = styled.div`
  font-size: 1.4rem;
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

function CabinRow({ cabin }) {
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
      <Table.Row>
        <Img src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <Capacity>Fits up to {maxCapacity} guest</Capacity>
        <Price>{regularPrice}</Price>
        {discount ? <Discount>{formatCurrency(discount)}</Discount> : "-"}
        <div>
          {/* Duplicate */}
          {/* <button onClick={handleOnDelete} disabled={isDeleting}> */}
          {/* <button onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button> */}

          {/* Change this to modal window */}
          {/* <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button> */}
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />
              <Menus.List id={cabinId}>
                {/* Duplicate Button */}
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={handleDuplicate}
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
          </Modal>
        </div>
      </Table.Row>
      {/* {showForm && <CreateCabinForm cabinToEdit={cabin} />} */}
    </>
  );
}

export default CabinRow;
