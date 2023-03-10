import { PetCard } from "./PetCard";
import { StyledAside } from "./StyledAside";

export function Aside() {
  return (
    <StyledAside>
      <h1>Procura-se</h1>
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
