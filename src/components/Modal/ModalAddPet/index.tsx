import React from "react";
import { Input } from "../../Input";
import { TextTag } from "../../TextType/TextType";
import { ThemeButton } from "../../ThemeButton/StyledButton";
import { StyledCartModalBox } from "../styledModal";

export const ModalAddPet = () => {
  return (
    <div>
      <StyledCartModalBox>
        <div>
          <header>
            <TextTag color="--grey-0" fontSize="14px">
              Adicionar Pet Perdido
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
          <ThemeButton
            backgroundColor="--color-primary"
            color="--grey-0"
            hoverBackground="--color-primary-focus"
            type="submit"
          >
            Cadastrar Pet
          </ThemeButton>
        </div>
      </StyledCartModalBox>
    </div>
  );
};
