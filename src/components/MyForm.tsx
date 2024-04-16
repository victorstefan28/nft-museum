import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  })
  .required();

function MyForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string }) => {
    console.log(data);
    /// do smth here with data.email
    window.location.href = `mailto:${data.email}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ position: "relative" }}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
            placeholder="name@company.com"
            style={{
              background: "#333",
              color: "#CCC",
              marginRight: "0.75rem",
            }}
          />
        )}
      />
      <Button
        variant="contained"
        onClick={handleSubmit(onSubmit)}
        sx={{
          backgroundColor: "#7C34FE",
          borderRadius: "5px",
          border: "1px solid #7C34FE",
          ":hover": {
            backgroundColor: "#7C34FE",
          },
          fontFamily: "Montserrat, sans-serif",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          padding: "16px 42px",
          textTransform: "lowercase",
        }}
      >
        submit
      </Button>
    </form>
  );
}

export default MyForm;
