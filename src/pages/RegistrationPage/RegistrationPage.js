import styled from "styled-components";
import Button from "../components/Shared/Button";
import InputBox from "../components/Shared/InputBox";
import MainContainer from "../components/Shared/MainContainer";
import logo from "../components/Shared/logo.svg";
import Text from "../components/Shared/Text";

export default function RegistrationPage() {
  return (
    <MainContainer>
      <Logo src={logo} />
      <form>
        <InputBox type="email" placeHolder={"email"} />
        <InputBox type="password" placeHolder={"senha"} />
        <InputBox type="text" placeHolder={"nome"} />
        <InputBox type="url" placeHolder={"foto"} />
        <Button
          size="large"
          type="submit"
          fontColor="white"
          backgroundColor="blue"
          content={"Entrar"}
        />
      </form>
      <Text
        size="small"
        color="blue"
        position="center"
        decoration="underline"
        pointer={true}
      >
        {"Já tem uma conta? Faça login!"}
      </Text>
    </MainContainer>
  );
}

const Logo = styled.img`
  margin: 0px auto 32px auto;
  width: 180px;
  height: 178px;
  margin-top: 68px;
`;
