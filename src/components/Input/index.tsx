import React from "react";
import { StyledFieldset } from "./styledInput";
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
