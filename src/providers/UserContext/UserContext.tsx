import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  IDefaultProviderProps,
  ILoginFormValues,
  IRegisterFormValues,
  IUser,
  IUserContext,
} from "./@types";
import { api } from "../../services/api";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userLoad = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      try {
        const response = await api.get("/login", {
          headers: {
            auth: token,
          },
        });
        setUser(response.data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    userLoad();
  }, []);

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@id", response.data.user.id);
      localStorage.setItem("@image", response.data.user.image);
      localStorage.setItem("@nome", response.data.user.name);
      navigate("/home");
      toast.success("Usuário registrado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };
  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@id", response.data.user.id);
      localStorage.setItem("@image", response.data.user.image);
      localStorage.setItem("@nome", response.data.user.name);
      //  TOASTIFY
      navigate("/home");
      toast.success("Usuário logado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };
  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
    setLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogout,
        navigate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
