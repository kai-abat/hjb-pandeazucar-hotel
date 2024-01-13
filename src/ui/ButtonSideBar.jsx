import { HiBars3BottomLeft, HiOutlineBars3 } from "react-icons/hi2";
import { useApp } from "../context/AppContext";
import ButtonIcon from "./ButtonIcon";

function ButtonSideBar() {
  const { toggleNavBar, showNav } = useApp();
  return (
    <ButtonIcon onClick={toggleNavBar}>
      {!showNav ? <HiOutlineBars3 /> : <HiBars3BottomLeft />}
    </ButtonIcon>
  );
}

export default ButtonSideBar;
