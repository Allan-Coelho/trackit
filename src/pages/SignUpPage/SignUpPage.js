import styled from "styled-components";
import Button from "../components/Shared/Button";
import InputBox from "../components/Shared/InputBox";
import MainContainer from "../components/Shared/MainContainer";
import logo from "../components/Shared/logo.svg";
import Text from "../components/Shared/Text";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/services.js";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function signUp(event) {
    event.preventDefault();
    const promise = postSignUp(form);

    setIsLoading(true);

    promise.then(() => {
      navigate("/");
    });

    promise.catch(() => {
      alert("Ocorreu um erro no cadastro. Tente novamente.");
    });
  }

  return (
    <MainContainer>
      <Logo src={logo} />
      <form onSubmit={signUp}>
        <InputBox
          type="email"
          name="email"
          handleChange={handleChange}
          placeHolder={"email"}
          value={form.email}
          isDisabled={isLoading}
          required={true}
        />
        <InputBox
          type="password"
          name="password"
          placeHolder={"senha"}
          handleChange={handleChange}
          value={form.password}
          isDisabled={isLoading}
          required={true}
        />
        <InputBox
          type="text"
          name="name"
          placeHolder={"nome"}
          handleChange={handleChange}
          value={form.name}
          isDisabled={isLoading}
          required={true}
        />
        <InputBox
          type="url"
          name="image"
          placeHolder={"foto"}
          handleChange={handleChange}
          value={form.image}
          isDisabled={isLoading}
          required={true}
        />
        <Button
          size="large"
          type="submit"
          fontColor="white"
          backgroundColor="blue"
          content={"Entrar"}
          isDisabled={isLoading}
        />
      </form>
      <Link to={"/"}>
        <Text
          size="small"
          color="blue"
          position="center"
          decoration="underline"
          pointer={true}
        >
          {"Já tem uma conta? Faça login!"}
        </Text>
      </Link>
    </MainContainer>
  );
}

const Logo = styled.img`
  margin: 0px auto 32px auto;
  width: 180px;
  height: 178px;
  margin-top: 68px;
`;
