import { StyledHeader } from "./StyledHeader";
import HomeIcon from "../../assets/HomeIcon.svg";
import HomeOn from "../../assets/HomeOn.svg";

interface iProps {
  title: string;
}

export function Header({ title }: iProps) {
  return (
    <StyledHeader>
      <div className="header__container">
        <h1>{title}</h1>
        <button
          className="icon__group"
          onClick={() => {
            location.reload();
          }}
        >
          <img src={HomeIcon} className="icon__up" />
          <img src={HomeOn} className="icon__down" />
        </button>
        <button>Sair</button>
      </div>
      <hr />
    </StyledHeader>
  );
}
