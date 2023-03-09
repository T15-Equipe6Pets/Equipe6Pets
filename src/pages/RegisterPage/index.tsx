import { StyledMain, StyledRegister } from "./styledRegister";
import { Input } from "../../components/Input";
import { ThemeH1, ThemeP } from "../../styles/Typography";
import { ThemeButton } from "../../components/ThemeButton/StyledButton";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <StyledRegister>
      <header>
        <div className="header_Container">
          <ThemeH1 color="--color-primary">Equipe6Pets</ThemeH1>
          <Link to="/" className="button">
            Voltar
          </Link>
        </div>
      </header>
      <StyledMain className="form_Container">
        <form action="">
          <Input
            labelText="Nome"
            placeHolder="Digite aqui seu nome"
            type="text"
          />
          <Input
            labelText="Email"
            placeHolder="Digite aqui seu email"
            type="email"
          />
          <Input
            labelText="Senha"
            placeHolder="Digite aqui sua senha"
            type="password"
          />
          <Input
            labelText="Confirmar Senha"
            placeHolder="Digite novamente sua senha"
            type="password"
          />
          <Input
            labelText="Cidade"
            placeHolder="Qual a sua cidade?"
            type="text"
          />
          <Input
            labelText="Contato"
            placeHolder="Opção de contato"
            type="text"
          />
          <ThemeButton
            backgroundColor="--color-primary"
            color="--grey-0"
            hoverBackground="--color-primary-focus"
            type="submit"
          >
            Cadastrar
          </ThemeButton>
        </form>
      </StyledMain>
    </StyledRegister>
  );
}
