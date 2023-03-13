// * IMPORT COMPONENTS
import { Header } from "../../components/Header";
import { Feed } from "../../components/Feed";
import { Aside } from "../../components/Aside";
// * IMPORT STYLE
import { StyledHome } from "./StyledHome";
import { ModalAddPet } from "../../components/Modal/ModalAddPet";
import { useContext } from "react";
import { LostPetContext } from "../../providers/LostPetContext/LostPetContext";

export function Home() {
  const { modal, setModal } = useContext(LostPetContext);
  return (
    <StyledHome>
      {modal ? <ModalAddPet /> : null}
      <Header title={"Equipe6Pets"} />
      <main>
        <Feed />
        <Aside />
      </main>
    </StyledHome>
  );
}
