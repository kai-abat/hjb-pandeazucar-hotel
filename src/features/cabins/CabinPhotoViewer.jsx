import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 3rem;
  margin-right: 0.5rem;
  padding: 0.25rem;
`;

const Image = styled.img`
  transform: scale(1.05);
  border-radius: 10px;
`;

function CabinPhotoViewer({ image }) {
  return (
    <StyledDiv>
      <Image src={image} alt="" />
    </StyledDiv>
  );
}

export default CabinPhotoViewer;
