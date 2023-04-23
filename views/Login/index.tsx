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
            <TextField
              id="name"
              label="Frist name"
              // InputLabelProps={{ className: "!text-gray-300" }}
              inputProps={{ className: "!text-white" }}
            />
            <TextField
              id="lastname"
              label="Last name"
              // InputLabelProps={{ className: "!text-gray-300" }}
              inputProps={{ className: "!text-white" }}
            />
            <EmailField
              id="email"
              className="col-span-full"
              label="Email"
              // InputLabelProps={{ className: "!text-gray-300" }}
              inputProps={{ className: "!text-white" }}
            />
            <PasswordField
              id="password"
              className="col-span-full"
              label="Password"
              // InputLabelProps={{ className: "!text-gray-300" }}
              inputProps={{ className: "!text-white" }}
            />
          </div>
          <Button className="!mx-auto !block">Create account</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;

const TextFieldStyled = styled(TextFieldComponet)(({ theme }) => ({
  // "& .MuiInputBase-root": {
  //   borderRadius: "20px",
  // },
  // "& .MuiInputBase-input": {
  //   padding: "24px 16px 8px 16px",
  //   color: "gray",
  //   fontWeight: 700,
  //   letterSpacing: "0px",
  // },
  // "& .MuiInputLabel-root.MuiInputLabel-shrink": {
  //   color: "darkgray",
  //   fontSize: "12px",
  //   transform: "translate(14px, 8px)",
  // },
  // "& fieldset legend": {
  //   width: "0px",
  // },
}));

const TextField = ({
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
      {...props}
    />
  );
};

const EmailField = (props: TextFieldProps) => (
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

const PasswordField = (props: TextFieldProps) => (
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
