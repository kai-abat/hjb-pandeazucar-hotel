import { useNavigate } from "react-router-dom";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import Button from "../../ui/Button";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Button type="text_icon" onClick={() => navigate("/login")}>
      <HiArrowLeftOnRectangle /> Login now
    </Button>
  );
};

export default Login;
