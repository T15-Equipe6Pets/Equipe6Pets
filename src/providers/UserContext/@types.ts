// eslint-disable-next-line import/no-unresolved
import { FieldError, UseFormRegisterReturn } from 'react-hook-form/dist/types';

// tipagem especifica de biblioteca de react
export interface IDefaultProviderProps {
  children: React.ReactNode;
}

// Interface é usado exclusivamente para definir objetos

export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confPassword: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

// interface criado depois das funções para usar as tipagens fornecidas pelo typescript
export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
}

export interface IInputProps {
  type: 'text' | 'email' | 'password';
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}
