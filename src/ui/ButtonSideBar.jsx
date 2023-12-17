import { HiOutlineBars3 } from "react-icons/hi2";
import { useApp } from "../context/AppContext";
import ButtonIcon from "./ButtonIcon";

function ButtonSideBar() {
  const { toggleNavBar } = useApp();
  return (
    <ButtonIcon onClick={toggleNavBar}>
      <HiOutlineBars3 />
    </ButtonIcon>
  );
}

export default ButtonSideBar;
