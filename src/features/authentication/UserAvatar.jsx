import styled from "styled-components";
import { useUser } from "./useUser";
import { ANON_USER } from "../../utils/constants";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  color: var(--color-grey-600);
  width: max-content;
`;

const Avatar = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;

  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user } = useUser();

  const { fullName, avatar } = user
    ? user.user_metadata
    : ANON_USER.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />

      {fullName}
    </StyledUserAvatar>
  );
}

export default UserAvatar;
