import styled from "styled-components";
import { DEVICE_MIN_W } from "../../utils/constants";

const StyledDiv = styled.div`
  /* margin-top: 3rem; */
  /* margin-right: 1rem; */
  /* padding: 0.25rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  height: 100%;
`;

const Image = styled.img`
  /* transform: scale(1.05); */
  border-radius: 10px;
  aspect-ratio: 3 / 2;
  /* width: 90%; */
  /* height: 100dvh; */
  max-height: 80vh;
  @media ${DEVICE_MIN_W.laptop} {
    max-height: inherit;
    width: 90%;
  }
`;

function CabinPhotoViewer({ image }) {
  return (
    <StyledDiv>
      <Image src={image} alt="" />
    </StyledDiv>
  );
}

export default CabinPhotoViewer;
