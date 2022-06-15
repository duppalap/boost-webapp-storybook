// material
import { IconButton, IconButtonProps } from "@mui/material";
import { forwardRef } from "react";
import ButtonAnimate from "../../animate/ButtonAnimate";
//

// ----------------------------------------------------------------------

const MIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...other }, ref) => (
    <ButtonAnimate>
      <IconButton ref={ref} {...other}>
        {children}
      </IconButton>
    </ButtonAnimate>
  )
);

export default MIconButton;
