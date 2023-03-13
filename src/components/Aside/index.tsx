import { PetCard } from "./PetCard";
import { StyledAside } from "./StyledAside";
import AsidePlus from "../../assets/AsidePlus.svg";
import { ModalAddPet } from "../Modal/ModalAddPet";
import { useContext } from "react";
import { LostPetContext } from "../../providers/LostPetContext/LostPetContext";

export function Aside() {
  const { modal, setModal, lostPetList } = useContext(LostPetContext);

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
          <PetCard
            imagem={pet.image}
            telefone={pet.phone}
            cidade={pet.city}
            nome={pet.name}
          />
        ))}
      </div>
    </StyledAside>
  );
}
