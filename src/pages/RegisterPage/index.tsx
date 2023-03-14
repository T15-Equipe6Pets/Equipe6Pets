import { StyledMain, StyledRegister } from "./styledRegister";
import { Input } from "../../components/Input";
import { ThemeH1, ThemeP } from "../../styles/Typography";
import { ThemeButton } from "../../components/ThemeButton/StyledButton";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { IRegisterFormValues } from "../../providers/UserContext/@types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";

export function Register() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Formato de email inválido"),
    password: yup
      .string()
      .required("Password obrigatório")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/^(?=.*[a-z])/, "Deve conter ao menos uma letra minúscula")
      .matches(/^(?=.*[A-Z])/, "Deve conter ao menos uma letra maiúscula")
      .min(6, "Deve conter no mínimo 8 caracteres"),

    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "As senhas devem ser idênticas"),
    city: yup.string().required("Cidade onde mora obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    image: yup.string().required("Foto obrigatória"),
  });

  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({ resolver: yupResolver(formSchema) });

  return (
    <StyledRegister>
      <ToastContainer />
      <header>
        <div className="header_Container">
          <ThemeH1 color="--color-primary">Equipe6Pets</ThemeH1>
          <Link to="/" className="button">
            Voltar
          </Link>
        </div>
      </header>
      <StyledMain className="form_Container">
        <form action="" onSubmit={handleSubmit(userRegister)}>
          <Input
            labelText="Nome"
            placeHolder="Digite aqui seu nome"
            type="text"
            register={register("name")}
            errors={errors.name}
          />
          <Input
            labelText="Email"
            placeHolder="Digite aqui seu email"
            type="email"
            register={register("email")}
            errors={errors.email}
          />
          <Input
            labelText="Senha"
            placeHolder="Digite aqui sua senha"
            type="password"
            register={register("password")}
            errors={errors.password}
          />
          <Input
            labelText="Confirmar Senha"
            placeHolder="Digite novamente sua senha"
            type="password"
            register={register("confirmPassword")}
            errors={errors.confirmPassword}
          />
          <Input
            labelText="Cidade"
            placeHolder="Qual a sua cidade?"
            type="text"
            register={register("city")}
            errors={errors.city}
          />
          <Input
            labelText="Contato"
            placeHolder="Opção de contato"
            type="text"
            register={register("contact")}
            errors={errors.contact}
          />
          <Input
            labelText="Imagem"
            placeHolder="Foto de Perfil"
            type="text"
            register={register("image")}
            errors={errors.image}
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
