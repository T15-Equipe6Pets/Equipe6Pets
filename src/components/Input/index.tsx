import React from "react";
import { StyledFieldset } from "./styledInput";
import TextField from "@mui/material/TextField";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
interface iProps {
  labelText?: string;
  type?: "text" | "email" | "password" | "number";
  placeHolder?: string;
  register?: UseFormRegisterReturn<string>;
  errors?: FieldError;
}

export function Input({
  labelText,
  placeHolder,
  register,
  errors,
  type,
}: iProps) {
  return (
    <StyledFieldset>
      <label htmlFor={labelText}> {labelText} </label>
      <input
        type={type}
        id={labelText}
        placeholder={placeHolder}
        {...register}
      />
      {errors ? <p className="error"> {errors.message} </p> : null}
    </StyledFieldset>
  );
}

export const InputText = ({ labelText, type, register, errors }: iProps) => {
  return (
    <fieldset>
      <TextField
        className="texField"
        id="standard-multiline-static"
        multiline
        rows={5}
        defaultValue=""
        variant="standard"
        type={type}
        label={labelText}
        {...register}
      />
      {errors ? <p>{errors.message}</p> : null}
    </fieldset>
  );
};
