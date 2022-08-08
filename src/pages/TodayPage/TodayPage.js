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
  const { loginData } = useContext(UserContext);
  const todayTitle = dayjs().format("dddd[,] DD/MM");

  useEffect(() => {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTIxNSwiaWF0IjoxNjU5OTEyOTIwfQ.3YZA58piwqk_kJFWqSp8a8RLxeasC98GZp068PZKZBQ",
      },
    };
    setIsLoading(true);
    const promise = getTodayHabits(config);

    promise.then((response) => {
      setIsLoading(false);
      setTodayHabits(() => {
        return response.data.length === 0 ? null : response.data;
      });
    });
  }, []);

  return (
    <>
      <Header
        profilePictureURL={
          "https://www.mlive.com/resizer/P0_a6UgcfkdY6zTH4ua7OE9AWpY=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/us-world-news/photo/odd-fat-cat-adoption-be22e5eb83799ccf.jpg"
        }
      />
      <MainContainer color="gray">
        <Title showButton={false}>{todayTitle}</Title>

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
          todayHabits.map((habit) => (
            <HabitCard
              type="status"
              name={habit.name}
              id={habit.id}
              done={habit.done}
              currentSequence={habit.currentSequence}
              highestSequence={habit.highestSequence}
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
