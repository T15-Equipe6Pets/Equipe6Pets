import React from "react";
import { Input } from "../../Input";
import { TextTag } from "../../TextType/TextType";
import { ThemeButton } from "../../ThemeButton/StyledButton";
import { StyledCartModalBox } from "../styledModal";

export const ModalEditPet = () => {
  return (
    <div>
      <StyledCartModalBox>
        <div>
          <header>
            <TextTag color="--grey-0" fontSize="14px">
              Editar Pet Perdido
            </TextTag>
            <button>x</button>
          </header>
          <Input
            labelText="Nome"
            placeHolder="Digite nome do seu pet aqui"
            type="text"
          />
          <Input
            labelText="Cidade"
            placeHolder="Digite asua cidade"
            type="text"
          />
          <Input
            labelText="Telefone"
            placeHolder="Digite seu contato"
            type="number"
          />
          <div className="containerBt">
            <ThemeButton
              backgroundColor="--color-primary"
              color="--grey-0"
              hoverBackground="--color-primary-focus"
              type="submit"
            >
              Salvar Alterações
            </ThemeButton>
            <ThemeButton
              className="deleteBt"
              backgroundColor="--grey-1"
              color="--grey-0"
              hoverBackground="--color-primary-focus"
              type="submit"
            >
              Excluir
            </ThemeButton>
          </div>
        </div>
      </StyledCartModalBox>
    </div>
  );
};
