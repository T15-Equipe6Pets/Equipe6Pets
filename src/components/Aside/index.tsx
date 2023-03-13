import { PetCard } from "./PetCard";
import { StyledAside } from "./StyledAside";
import AsidePlus from "../../assets/AsidePlus.svg";

export function Aside() {
  return (
    <StyledAside>
      <div className="pet-card__title">
        <h1>Procura-se</h1>
        <button>
          <img src={AsidePlus} />
        </button>
      </div>
      <div className="pet-card__container">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    </StyledAside>
  );
}
