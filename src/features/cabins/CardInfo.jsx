import { useDeleteCabins } from "./useDeleteCabins";
import { useCreateCabins } from "./useCreateCabins";
import Card from "../../ui/Card";
import styled from "styled-components";
import { DEVICE_MIN_W } from "../../utils/constants";
import Price from "../../ui/Price";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import CabinPhotoViewer from "./CabinPhotoViewer";
import CreateCabinForm from "./CreateCabinForm";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Description = styled.div`
  text-indent: 10%;
  color: var(--color-grey-600);
  font-style: italic;
  letter-spacing: 0.05em;
  width: fit-content;
`;

const Capacity = styled.div`
  color: var(--color-grey-600);
  @media ${DEVICE_MIN_W.tablet} {
    font-size: 1.2em;
  }
`;

const CardInfo = ({ cabin }) => {
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
    <Card>
      <Modal>
        <Modal.Open opensWindowName="cabin-photo-viewer" isMaxHeight={false}>
          <Card.Image imageSrc={image} alt={name} />
        </Modal.Open>
        <Card.Title>{name}</Card.Title>
        <Card.Content>
          <Description>{description}</Description>

          <Capacity>Fits up to {maxCapacity} guest</Capacity>

          <Price origPrice={regularPrice} discount={discount} />
        </Card.Content>
        <Card.NavButtons>
          <Card.Button
            icon={<HiSquare2Stack />}
            label="Duplicate"
            disabled={isDeleting || isCreating}
            onClick={handleDuplicate}
          />
          <Modal.Open opensWindowName="edit-cabin-form">
            <Card.Button
              icon={<HiPencil />}
              label="Edit"
              disabled={isDeleting || isCreating}
            />
          </Modal.Open>
          {/* Delete Button */}
          <Modal.Open opensWindowName="delete-cabin">
            <Card.Button
              icon={<HiTrash />}
              variation="danger"
              label="Delete"
              disabled={isDeleting || isCreating}
            />
          </Modal.Open>
        </Card.NavButtons>
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
      </Modal>
    </Card>
  );
};

export default CardInfo;
