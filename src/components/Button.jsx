import { useState } from "react";
import { StyledBtn, StyledButton } from "./library";

const Button = ({ second }) => {
  const [state, setState] = useState(false);

  const handleToggle = () => setState(!state);

  return !second ? (
    <StyledButton
      onClick={handleToggle}
      variant={state ? "secondary" : "primary"}
    >
      Click Me
    </StyledButton>
  ) : (
    <StyledBtn onClick={handleToggle} variant={state ? "tertiary" : "primary"}>
      Click Me
    </StyledBtn>
  );
};

export default Button;
