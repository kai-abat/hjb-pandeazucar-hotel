import { useSearchParams } from "react-router-dom";
import Container from "./Container";
import ButtonIcon from "./ButtonIcon";

const DisplayMode = ({ modeField, options, currentMode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (value) => {
    searchParams.set(modeField, value);
    setSearchParams(searchParams);
  };

  return (
    <Container direction="row">
      {options.map(
        (opt) =>
          opt.value !== currentMode && (
            <ButtonIcon
              key={opt.value}
              onClick={() => handleClick(opt.value)}
              data-tooltip-id="tooltip-bottom"
              data-tooltip-content={`View as ${opt.value}`}
            >
              <opt.icon />
            </ButtonIcon>
          )
      )}
    </Container>
  );
};

export default DisplayMode;
