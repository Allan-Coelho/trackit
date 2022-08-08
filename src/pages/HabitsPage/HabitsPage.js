import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { getHabits } from "../../services/services";
import Footer from "../components/Footer/Footer";
import HabitCard from "../components/HabitCard/HabitCard";
import Header from "../components/Header/Header";
import MainContainer from "../components/Shared/MainContainer";
import Title from "../components/Shared/Title";
import Text from "../components/Shared/Text";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function HabitsPage() {
  const [isAdd, setIsAdd] = useState(false);
  const [habits, setHabits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const { loginData } = useContext(UserContext);
  const navigate = useNavigate();

  if (loginData.token === undefined) {
    navigate("/");
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${loginData.token}`,
      },
    };

    const promise = getHabits(config);
    setIsLoading(true);

    promise.then((response) => {
      setHabits(() => {
        return response.data.length === 0 ? null : response.data;
      });
      setIsLoading(false);
    });
  }, [isChanged]);

  return (
    <>
      <Header profilePictureURL={loginData.image} />
      <MainContainer color="gray">
        <Title setState={setIsAdd} state={isAdd}>
          {"Meus Hábitos"}
        </Title>
        {isAdd ? (
          <HabitCard
            type="create"
            setIsAdd={setIsAdd}
            setIsChanged={setIsChanged}
            isChanged={isChanged}
          />
        ) : (
          ""
        )}

        {isLoading ? (
          <Oval
            height={80}
            width={80}
            color="#126ba5"
            wrapperStyle={{ margin: "0 auto" }}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#fff"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : habits !== null ? (
          habits.map((habit, index) => (
            <HabitCard
              type="habit"
              name={habit.name}
              id={habit.id}
              days={habit.days}
              setHabits={setHabits}
              setIsChanged={setIsChanged}
              isChanged={isChanged}
              key={index}
            />
          ))
        ) : (
          <Text color="gray" size="medium">
            {
              "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
            }
          </Text>
        )}
      </MainContainer>
      <Footer percentage={90} />
    </>
  );
}
