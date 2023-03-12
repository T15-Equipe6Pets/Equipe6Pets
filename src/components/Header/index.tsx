import { StyledHeader } from "./StyledHeader";

interface iProps {
  title: string;
}

export function Header({ title }: iProps) {
  return (
    <StyledHeader>
      <div>
        <h1>{title}</h1>
        <button>Sair</button>
      </div>
      <hr />
    </StyledHeader>
  );
}
