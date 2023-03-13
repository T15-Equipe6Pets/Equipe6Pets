// * IMPORT COMPONENTS
import { Header } from "../../components/Header";
import { Feed } from "../../components/Feed";
import { Aside } from "../../components/Aside";
// * IMPORT STYLE
import { StyledHome } from "./StyledHome";
import { ModalAddPet } from "../../components/Modal/ModalAddPet";
import { useContext } from "react";
import { LostPetContext } from "../../providers/LostPetContext/LostPetContext";
import { ModalEditPet } from "../../components/Modal/ModalEditPet";

export function Home() {
  const { modal, setModal, modalInfo } = useContext(LostPetContext);
  return (
    <StyledHome>
      {modal ? <ModalAddPet /> : null}
      {modalInfo ? <ModalEditPet id={event?.target.id} /> : null}
      <Header title={"Equipe6Pets"} />
      <main>
        <Feed />
        <Aside />
      </main>
    </StyledHome>
  );
}
