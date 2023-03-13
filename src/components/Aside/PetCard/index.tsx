import { StyledPetCard } from "./StyledPetCard";
export interface ILostPetValue {
  nome: string;
  cidade: string;
  telefone: string;
  imagem: string;
}

export function PetCard({ nome, cidade, telefone, imagem }: ILostPetValue) {
  return (
    <StyledPetCard>
      <img src={imagem} alt="" />
      <div>
        <span>Nome: {nome} </span>
        <span>Cidade:{cidade} </span>
        <span>Telefone: {telefone} </span>
      </div>
    </StyledPetCard>
  );
}
