import { Button as ButtonComponent, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonStyled = styled(ButtonComponent)(({ theme }) => ({}));

const Button = ({ className, ...props }: ButtonProps) => (
  <ButtonStyled
    variant="contained"
    disableRipple={true}
    className={`bg-blue-700 shadow-none px-8 py-2 rounded-lg normal-case ${className}`}
    {...props}
  />
);

export default Button;
