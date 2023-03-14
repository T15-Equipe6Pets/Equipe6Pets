import { PetCard } from "./PetCard";
import { StyledAside } from "./StyledAside";
import AsidePlus from "../../assets/AsidePlus.svg";
import { ModalAddPet } from "../Modal/ModalAddPet";
import { useContext } from "react";
import { LostPetContext } from "../../providers/LostPetContext/LostPetContext";
import { StyledCartModalBox } from "../Modal/styledModal";
import { ModalEditPet } from "../Modal/ModalEditPet";

export function Aside() {
  const {
    modal,
    setModal,
    lostPetList,
    setModalInfo,
    modalInfo,
    setPetId,
    setPetCity,
    setPetName,
    setPetPhone,
  } = useContext(LostPetContext);

  return (
    <StyledAside>
      <div className="pet-card__title">
        <h1>Procura-se</h1>
        <button>
          <img
            src={AsidePlus}
            onClick={() => {
              setModal(true);
            }}
          />
        </button>
      </div>
      <div className="pet-card__container">
        {lostPetList.map((pet) => (
          <div
            onClick={() => {
              setModalInfo(true);
              setPetId(pet.id);
              setPetCity(pet.city);
              setPetName(pet.name);
              setPetPhone(pet.phone);
            }}
          >
            <PetCard
              id={`${pet.id}`}
              key={pet.phone}
              imagem={pet.image}
              telefone={pet.phone}
              cidade={pet.city}
              nome={pet.name}
            />
          </div>
        ))}
      </div>
    </StyledAside>
  );
}
