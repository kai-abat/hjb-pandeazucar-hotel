import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { DEVICE_MAX_W } from "../utils/constants";

const LoginLayout = styled.main`
  height: 100dvh;
  width: 100%;
  display: grid;
  grid-template-columns: 50rem;
  align-content: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  @media ${DEVICE_MAX_W.tablet} {
    grid-template-columns: 1fr;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h5">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
