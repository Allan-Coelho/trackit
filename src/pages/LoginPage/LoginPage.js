import styled from "styled-components";
import Button from "../components/Shared/Button";
import InputBox from "../components/Shared/InputBox";
import MainContainer from "../components/Shared/MainContainer";
import logo from "../components/Shared/logo.svg";
import Text from "../components/Shared/Text";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { postLogin } from "../../services/services";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setLoginData } = useContext(UserContext);
  const navigate = useNavigate();

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function login(event) {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    const promise = postLogin(body);

    setIsLoading(true);

    promise.then((response) => {
      const data = response.data;
      setLoginData(data);
      setIsLoading(false);
      navigate("/hoje");
    });

    promise.catch((response) => {
      alert("Ocorreu um erro no login");
      setIsLoading(false);
      console.log(response);
    });
  }

  return (
    <>
      <MainContainer>
        <Logo src={logo} />
        <form onSubmit={login}>
          <InputBox
            type="email"
            placeHolder={"email"}
            handleChange={handleChange}
            isDisabled={isLoading}
            name="email"
            required={true}
            value={form.email}
          />
          <InputBox
            type="password"
            placeHolder={"senha"}
            handleChange={handleChange}
            isDisabled={isLoading}
            required={true}
            name="password"
            value={form.password}
          />
          <Button
            size="large"
            type="submit"
            fontColor="white"
            backgroundColor="blue"
            content="Entrar"
            isDisabled={isLoading}
          />
        </form>
        <Link to={"/cadastro"}>
          <Text
            size="small"
            color="blue"
            position="center"
            decoration="underline"
            pointer={true}
          >
            {"Não tem uma conta? Cadastre-se!"}
          </Text>
        </Link>
      </MainContainer>
    </>
  );
}

const Logo = styled.img`
  margin: 0px auto 32px auto;
  width: 180px;
  height: 178px;
  margin-top: 68px;
`;
