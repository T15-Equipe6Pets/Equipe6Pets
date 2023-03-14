import { StyledPetCard } from "./StyledPetCard";
export interface ILostPetValue {
  nome: string;
  cidade: string;
  telefone: string;
  imagem: string;
  id: string;
}

export function PetCard({ nome, cidade, telefone, imagem, id }: ILostPetValue) {
  return (
    <StyledPetCard id={id}>
      <img src={imagem} alt="" />
      <div>
        <span>Nome: {nome} </span>
        <span>Cidade:{cidade} </span>
        <span>Telefone: {telefone} </span>
      </div>
    </StyledPetCard>
  );
}
