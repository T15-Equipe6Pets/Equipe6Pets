import React, { useContext } from "react";
import { LostPetContext } from "../../../providers/LostPetContext/LostPetContext";
import { Input } from "../../Input";
import { TextTag } from "../../TextType/TextType";
import { ThemeButton } from "../../ThemeButton/StyledButton";
import { StyledCartModalBox } from "../styledModal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { useForm } from "react-hook-form";
import { ICreateLostPetFormValues } from "../../../providers/LostPetContext/@type";

export const ModalAddPet = () => {
  const { modal, setModal, lostPetCreate } = useContext(LostPetContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    city: yup.string().required("Cidade onde mora obrigatória"),
    phone: yup.string().required("Contato obrigatório"),
    image: yup.string().required("Imagem do pet obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateLostPetFormValues>({ resolver: yupResolver(formSchema) });

  return (
    <div>
      <StyledCartModalBox>
        <form onSubmit={handleSubmit(lostPetCreate)}>
          <header>
            <TextTag color="--grey-0" fontSize="14px">
              Adicionar Pet Perdido
            </TextTag>
            <button
              onClick={() => {
                setModal(false);
              }}
            >
              x
            </button>
          </header>

          <Input
            labelText="Nome"
            placeHolder="Digite nome do seu pet aqui"
            type="text"
            register={register("name")}
            errors={errors.name}
          />

          <Input
            labelText="Cidade"
            placeHolder="Digite asua cidade"
            type="text"
            register={register("city")}
            errors={errors.city}
          />
          <Input
            labelText="Telefone"
            placeHolder="Digite seu contato"
            type="number"
            register={register("phone")}
            errors={errors.phone}
          />
          <Input
            labelText="Imagem"
            placeHolder="Coloque o link para a foto"
            type="text"
            register={register("image")}
            errors={errors.image}
          />
          <ThemeButton
            backgroundColor="--color-primary"
            color="--grey-0"
            hoverBackground="--color-primary-focus"
            type="submit"
          >
            Cadastrar Pet
          </ThemeButton>
        </form>
      </StyledCartModalBox>
    </div>
  );
};
