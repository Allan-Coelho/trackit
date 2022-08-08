import Header from "../Header/Header";
import MainContainer from "../Shared/MainContainer";
import Title from "../Shared/Title";
import Text from "../Shared/Text";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function HistoryPage() {
  const { loginData } = useContext(UserContext);
  const navigate = useNavigate();

  if (loginData.token === undefined) {
    navigate("/");
  }
  
  return (
    <>
      <Header profilePictureURL={loginData.image} />
      <MainContainer color="gray">
        <Title showButton={false}>{"Histórico"}</Title>

        <Text color="gray" size="medium">
          {"Em breve você poderá ver o histórico dos seus hábitos aqui!"}
        </Text>
      </MainContainer>
      <Footer percentage={90} />
    </>
  );
}
