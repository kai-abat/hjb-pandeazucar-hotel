import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useAnonLogin } from "./useAnonLogin";
import InputPassword from "../../ui/InputPassword";

function LoginForm() {
  // email: jexik11258@bayxs.com
  // pw: fake1234
  const [email, setEmail] = useState("guest@gmail.com");
  const [password, setPassword] = useState("fake1234");
  // const [email, setEmail] = useState("jexik11258@bayxs.com");
  // const [password, setPassword] = useState("fake1234");

  const { login, isLoading } = useLogin();
  const anonLogin = useAnonLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    if (email === "guest@gmail.com") {
      anonLogin();
      return;
    }
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <>
          {/* <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          /> */}
          <InputPassword
            disabled={isLoading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
