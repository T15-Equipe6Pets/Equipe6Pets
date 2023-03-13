import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

import { TextTag } from "../../components/TextType/TextType";
import { ThemeButton } from "../../components/ThemeButton/StyledButton";
import { ThemeH1 } from "../../styles/Typography";
import { StyledContainerLogin, StyledMain } from "./styledLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../providers/UserContext/UserContext";
import { ILoginFormValues } from "../../providers/UserContext/@types";
import { useForm } from "react-hook-form";

export const Login = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Formato de email inválido"),
    password: yup
      .string()
      .required("Password obrigatório")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/^(?=.*[a-z])/, "Deve conter ao menos uma letra minúscula")
      .matches(/^(?=.*[A-Z])/, "Deve conter ao menos uma letra maiúscula")
      .min(6, "Deve conter no mínimo 8 caracteres"),
  });

  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({ resolver: yupResolver(formSchema) });

  return (
    <StyledContainerLogin>
      <header>
        <div className="header_Container">
          <ThemeH1 color="--color-primary">Equipe6Pets</ThemeH1>
        </div>
      </header>
      <StyledMain className="form_Container">
        <form action="" onSubmit={handleSubmit(userLogin)}>
          <TextTag
            color="--grey-0"
            fontSize="22px"
            lineHeiht="15px"
            marginTop="35px"
          >
            Login
          </TextTag>
          <Input
            labelText="Nome"
            placeHolder="Digite aqui seu nome"
            type="email"
            register={register("email")}
            errors={errors.email}
          />

          <Input
            labelText="Senha"
            placeHolder="Digite aqui sua senha"
            type="password"
            register={register("password")}
            errors={errors.password}
          />

          <ThemeButton
            backgroundColor="--color-primary"
            color="--grey-0"
            hoverBackground="--color-primary-focus"
            type="submit"
          >
            Entrar
          </ThemeButton>
          <TextTag color="--grey-1" fontSize="14px" lineHeiht="15px">
            Ainda não possui conta ?
          </TextTag>
          <Link className="linkTag" to={"/register"}>
            Cadastre-se
          </Link>
        </form>
      </StyledMain>
    </StyledContainerLogin>
  );
};
