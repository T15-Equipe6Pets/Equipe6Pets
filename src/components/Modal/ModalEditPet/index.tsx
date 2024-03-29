import React, { useContext } from "react";
import { LostPetContext } from "../../../providers/LostPetContext/LostPetContext";
import { Input } from "../../Input";
import { TextTag } from "../../TextType/TextType";
import { ThemeButton } from "../../ThemeButton/StyledButton";
import { StyledCartModalBox } from "../styledModal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ICreateLostPetFormValues } from "../../../providers/LostPetContext/@type";

export const ModalEditPet = () => {
  const {
    setModalInfo,
    petId,
    lostPetRemove,
    petCity,
    petName,
    petPhone,
    lostPetEdit,
  } = useContext(LostPetContext);

  const formSchema = yup.object().shape({
    name: yup.string().required(),
    city: yup.string().required(),
    phone: yup.string().required(),
  });

  function submit(formData: ICreateLostPetFormValues) {
    lostPetEdit(formData);
    setModalInfo(false);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateLostPetFormValues>({ resolver: yupResolver(formSchema) });

  return (
    <div>
      <StyledCartModalBox>
        <form id={`${petId}`} onSubmit={handleSubmit(submit)}>
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
          <Input
            labelText="Nome"
            placeHolder={petName}
            type="text"
            register={register("name")}
            errors={errors.name}
          />
          <Input
            labelText="Cidade"
            placeHolder={petCity}
            type="text"
            register={register("city")}
            errors={errors.city}
          />
          <Input
            labelText="Contato"
            placeHolder={petPhone}
            type="text"
            register={register("phone")}
            errors={errors.phone}
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
              onClick={() => {
                lostPetRemove(`${petId}`);
                setModalInfo(false);
              }}
            >
              Excluir
            </ThemeButton>
          </div>
        </form>
      </StyledCartModalBox>
    </div>
  );
};
