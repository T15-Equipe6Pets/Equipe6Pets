import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { ModalAddPet } from "../../components/Modal/ModalAddPet";
import { ModalDeletePost } from "../../components/Modal/ModalDeletePost";
import { ModalEditPet } from "../../components/Modal/ModalEditPet";
import { TextTag } from "../../components/TextType/TextType";
import { ThemeButton } from "../../components/ThemeButton/StyledButton";
import { ThemeH1 } from "../../styles/Typography";
import { StyledContainerLogin, StyledMain } from "./styledLogin";

export const Login = () => {
  return (
    <StyledContainerLogin>
      <ModalDeletePost />

      <header>
        <div className="header_Container">
          <ThemeH1 color="--color-primary">Equipe6Pets</ThemeH1>
        </div>
      </header>
      <StyledMain className="form_Container">
        <form action="">
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
            type="text"
          />

          <Input
            labelText="Senha"
            placeHolder="Digite aqui sua senha"
            type="password"
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
