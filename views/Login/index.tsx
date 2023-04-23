import React from "react";
import {
  TextField as TextFieldComponet,
  TextFieldProps,
  createTheme,
  InputAdornment,
  Button as ButtonComponent,
  ButtonProps,
  OutlinedTextFieldProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountCircle, EmailRounded, Password } from "@mui/icons-material";

const LoginView = () => {
  return (
    <div className="px-8 py-16 bg-blue-950">
      <div className="grid w-full grid-cols-12">
        <div className="col-start-1 col-end-6">
          <p className="mb-4 text-4xl font-bold text-white">
            Create new account <span className="">.</span>
          </p>
          <p className="mb-4 text-sm text-white">
            Already has an account?{" "}
            <a href="/" className="text-blue-500 underline">
              Log in
            </a>
          </p>
          <div className="grid max-w-lg grid-cols-2 mb-4 gap-x-4 gap-y-4">
            <TextField variant="outlined" id="name" label="Frist name" />
            <TextField variant="outlined" id="lastname" label="Last name" />
            <EmailField
              variant="outlined"
              id="email"
              className="col-span-full"
              label="Email"
            />
            <PasswordField
              variant="outlined"
              id="password"
              className="col-span-full"
              label="Password"
            />
          </div>
          <Button className="!mx-auto !block">Create account</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;

const TextField = ({
  variant,
  inputProps,
  InputProps,
  InputLabelProps,
  ...props
}: OutlinedTextFieldProps) => {
  return (
    <TextFieldComponet
      InputProps={{
        classes: {
          root: "tw bg-blue-900 rounded-2xl .",
          input: "tw px-4 pt-6 pb-2 font-bold .",
        },
        endAdornment: (
          <InputAdornment position="end">
            <AccountCircle className="text-gray-200 ." />
          </InputAdornment>
        ),
        notched: false,
      }}
      inputProps={{
        ...inputProps,
      }}
      InputLabelProps={{
        size: "small",
        classes: {
          root: "tw text-red-400 translate-x-0 translate-y-0 text-xs left-4 top-2 .",
        },
        disableAnimation: true,
        shrink: true,
        // ...InputLabelProps,
      }}
      variant={variant && "outlined"}
      {...props}
    />
  );
};

const EmailField = ({ ...props }: OutlinedTextFieldProps) => (
  <TextField
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <EmailRounded className="text-gray-200" />
        </InputAdornment>
      ),
    }}
    {...props}
  />
);

const PasswordField = (props: OutlinedTextFieldProps) => (
  <TextField
    type="password"
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <Password className="text-gray-200" />
        </InputAdornment>
      ),
    }}
    {...props}
  />
);

const ButtonStyled = styled(ButtonComponent)(({ theme }) => ({}));

const Button = ({ className, ...props }: ButtonProps) => (
  <ButtonStyled
    variant="contained"
    disableRipple={true}
    className={`!bg-red-700 !px-8 !py-2 !rounded-full !normal-case ${className}`}
    {...props}
  />
);
