// eslint-disable-next-line import/no-unresolved
import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { NavigateFunction } from "react-router-dom";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  city: string;
  contact: string;
  image: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface ITextPost {
  text: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
  navigate: NavigateFunction;
}

export interface IInputProps {
  type: "text" | "email" | "password";
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}
