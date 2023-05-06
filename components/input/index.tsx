import {
  TextField as TextFieldComponet,
  InputAdornment,
  Button as ButtonComponent,
  ButtonProps,
  OutlinedTextFieldProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountCircle, EmailRounded, Password } from "@mui/icons-material";

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
          root: "tw rounded-2xl .",
          input:
            "tw px-4 pt-6 pb-2 font-bold text-gray-700 shadow-none-on-autocomplete .",
        },
        endAdornment: (
          <InputAdornment position="end">
            <AccountCircle className="text-gray-300 ." />
          </InputAdornment>
        ),
        notched: false,
        ...InputProps,
      }}
      inputProps={{
        ...inputProps,
      }}
      InputLabelProps={{
        size: "small",
        classes: {
          root: "tw text-gray-400 translate-x-0 translate-y-0 text-xs left-4 top-2 .",
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

export default {
  Text: TextField,
  Email: EmailField,
  Password: PasswordField,
};
