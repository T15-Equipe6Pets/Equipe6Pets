import { StyledPetCard } from "./StyledPetCard";

export function PetCard() {
  return (
    <StyledPetCard>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt=""
      />
      <div>
        <span>Nome: XXXX</span>
        <span>Cidade: XXX</span>
        <span>Telefone: (XX) X XXXX-XXXX</span>
      </div>
    </StyledPetCard>
  );
}
