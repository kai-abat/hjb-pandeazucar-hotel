import { useState } from "react";
import Input from "./Input";
import styled from "styled-components";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  /* border-radius: var(--border-radius-sm); */

  &:focus-within {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  padding: 0;
  outline: none;
  border: none;
  box-shadow: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0 0.4rem;
  outline-offset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:focus {
    outline: none;
    border: none;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }

  /* height: ${(props) => props.$height && props.$height}px; */
`;

const InputPassword = ({ disabled, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  console.log(value);
  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <Wrapper id="pw-wrapper">
      <StyledInput
        type={!showPassword ? "password" : "text"}
        id="password"
        autoComplete="current-password"
        placeholder="Password"
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {value && (
        <ButtonIcon onClick={handleClickShowPassword}>
          {showPassword ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
        </ButtonIcon>
      )}
    </Wrapper>
  );
};

export default InputPassword;
