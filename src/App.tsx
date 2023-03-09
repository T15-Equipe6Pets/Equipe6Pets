import { Input } from "./components/Input";
import { ThemeButton } from "./components/ThemeButton/StyledButton";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Input errors="Erro"></Input>
      <button style={{ backgroundColor: "--color-primary" }}></button>
      <ThemeButton
        backgroundColor="--color-primary"
        color="--grey-0"
        hoverBackground="--color-primary-focus"
        type="submit"
      >
        Entrar
      </ThemeButton>
    </div>
  );
}

export default App;
