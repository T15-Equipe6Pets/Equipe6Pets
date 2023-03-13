import React, { useContext } from "react";
import { LostPetContext } from "../../../providers/LostPetContext/LostPetContext";
import { Input } from "../../Input";
import { TextTag } from "../../TextType/TextType";
import { ThemeButton } from "../../ThemeButton/StyledButton";
import { StyledCartModalBox } from "../styledModal";

export const ModalEditPet = () => {
  const { setModalInfo, petId, lostPetRemove, petCity, petName, petPhone } =
    useContext(LostPetContext);

  return (
    <div>
      <StyledCartModalBox>
        <div id={`${petId}`}>
          <header>
            <TextTag color="--grey-0" fontSize="14px">
              Editar Pet Perdido
            </TextTag>
            <button
              onClick={() => {
                setModalInfo(false);
              }}
            >
              x
            </button>
          </header>
          <Input labelText="Nome" placeHolder={petName} type="text" />
          <Input labelText="Cidade" placeHolder={petCity} type="text" />
          <Input labelText="Telefone" placeHolder={petPhone} type="number" />
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
              onClick={() => {
                lostPetRemove(`${petId}`);
                setModalInfo(false);
              }}
            >
              Excluir
            </ThemeButton>
          </div>
        </div>
      </StyledCartModalBox>
    </div>
  );
};
