import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { getTodayHabits } from "../../services/services";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainContainer from "../components/Shared/MainContainer";
import Title from "../components/Shared/Title";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import HabitCard from "../components/HabitCard/HabitCard";
import { Oval } from "react-loader-spinner";
import Text from "../components/Shared/Text";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  weekdays: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
});

export default function TodayPage() {
  const [todayHabits, setTodayHabits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { loginData, setPercentage, percentage } = useContext(UserContext);
  const todayTitle = dayjs().format("dddd[,] DD/MM");
  const [isChanged, setIsChanged] = useState(false);
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

    setIsLoading(true);
    const promise = getTodayHabits(config);

    promise.then((response) => {
      setIsLoading(false);
      setTodayHabits(() => {
        return response.data.length === 0 ? null : response.data;
      });
      if (response.data.length === 0) {
        setPercentage(0);
      } else {
        setPercentage(
          Math.round(
            100 *
              (response.data.filter((habit) => habit.done === true).length /
                response.data.length)
          )
        );
      }
    });
  }, [isChanged]);

  return (
    <>
      <Header profilePictureURL={loginData.image} />
      <MainContainer color="gray">
        <TitlesContainer>
          <Title margin={"none"} showButton={false}>{todayTitle}</Title>
          {percentage === 0 ? (
            <Text color={"gray"} size="medium">
              {"Nenhum hábito concluído ainda"}
            </Text>
          ) : (
            <Text
              color={"green"}
              size="medium"
            >{`${percentage}% dos hábitos concluídos`}</Text>
          )}
        </TitlesContainer>
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
        ) : todayHabits !== null ? (
          todayHabits.map((habit, index) => (
            <HabitCard
              type="status"
              name={habit.name}
              id={habit.id}
              done={habit.done}
              currentSequence={habit.currentSequence}
              highestSequence={habit.highestSequence}
              setIsChanged={setIsChanged}
              setIsLoading={setIsLoading}
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

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 28px 0px 20px 0px;
`;
