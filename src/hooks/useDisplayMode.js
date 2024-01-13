import { useSearchParams } from "react-router-dom";
import useWindowDimensions from "./useWindowDimensions";
import {
  DEVICE_SCREEN,
  DISPLAY_MODE,
  DISPLAY_MODE_M,
} from "../utils/constants";

const useDisplayMode = () => {
  const { width: vpWidth } = useWindowDimensions();
  const [searchParams] = useSearchParams();

  const mode =
    vpWidth > DEVICE_SCREEN.tablet.max ? DISPLAY_MODE : DISPLAY_MODE_M;
  const currentMode =
    searchParams.get(mode.modeField) || mode.options.at(0).value;

  return { mode, currentMode };
};

export default useDisplayMode;
