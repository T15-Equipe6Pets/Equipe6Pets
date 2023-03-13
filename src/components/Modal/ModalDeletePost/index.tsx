import React from "react";
import { Input } from "../../Input";
import { TextTag } from "../../TextType/TextType";
import { ThemeButton } from "../../ThemeButton/StyledButton";
import { StyledCartModalBox } from "../styledModal";

export const ModalDeletePost = () => {
  return (
    <div>
      <StyledCartModalBox>
        <div>
          <header>
            <TextTag color="--grey-0" fontSize="14px">
              Deletar Post
            </TextTag>
            <button>x</button>
          </header>
          <ThemeButton
            backgroundColor="--color-primary"
            color="--grey-0"
            hoverBackground="--color-primary-focus"
            type="submit"
          >
            Confirmar
          </ThemeButton>
          <ThemeButton
            backgroundColor="--negative"
            color="--grey-0"
            hoverBackground="--negative-hover"
            type="submit"
          >
            Cancelar
          </ThemeButton>
          <br />
        </div>
      </StyledCartModalBox>
    </div>
  );
};
