// * IMPORT COMPONENTS
import { Header } from "../../components/Header";
import { Feed } from "../../components/Feed";
import { Aside } from "../../components/Aside";
// * IMPORT STYLE
import { StyledHome } from "./StyledHome";

export function Home() {
  return (
    <StyledHome>
      <Header title={"Equipe6Pets"} />
      <main>
        <Feed />
        <Aside />
      </main>
    </StyledHome>
  );
}
