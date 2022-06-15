// material
import { Button, ButtonProps } from "@mui/material";

// ----------------------------------------------------------------------

interface BaseButtonProps extends ButtonProps {
  label: string;
}
export default function MBaseButton({ label, ...other }: BaseButtonProps) {
  return <Button {...other}>{label}</Button>;
}
