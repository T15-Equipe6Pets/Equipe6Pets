import { StyledHeader } from "./StyledHeader";
import HomeIcon from "../../assets/HomeIcon.svg";
import HomeOn from "../../assets/HomeOn.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

interface iProps {
  title: string;
}

export function Header({ title }: iProps) {
  const { navigate } = useContext(UserContext);

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
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Sair
        </button>
      </div>
      <hr />
    </StyledHeader>
  );
}
