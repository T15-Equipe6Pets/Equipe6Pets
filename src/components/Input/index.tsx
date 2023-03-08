import React from "react";
import { StyledFieldset } from "./styledInput";
interface iProps {
  labelText?: string;
  type?: "text" | "email" | "password";
  placeHolder?: string;
  register?: string;
  errors?: string;
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
      <label htmlFor={register}> {labelText} </label>
      <input type={type} id={register} placeholder={placeHolder} />
      {errors && <p className="error"> {errors} </p>}
    </StyledFieldset>
  );
}
