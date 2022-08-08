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

export default function HabitsPage() {
  const [isAdd, setIsAdd] = useState(false);
  const [habits, setHabits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { loginData } = useContext(UserContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTIxNSwiaWF0IjoxNjU5OTEyOTIwfQ.3YZA58piwqk_kJFWqSp8a8RLxeasC98GZp068PZKZBQ",
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
  }, []);

  return (
    <>
      <Header
        profilePictureURL={
          "https://www.mlive.com/resizer/P0_a6UgcfkdY6zTH4ua7OE9AWpY=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/us-world-news/photo/odd-fat-cat-adoption-be22e5eb83799ccf.jpg"
        }
      />
      <MainContainer color="gray">
        <Title setState={setIsAdd} state={isAdd}>
          {"Meus Hábitos"}
        </Title>
        {isAdd ? <HabitCard type="create" setIsAdd={setIsAdd} /> : ""}

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
          habits.map((habit) => (
            <HabitCard
              type="habit"
              name={habit.name}
              id={habit.id}
              days={habit.days}
              setHabits={setHabits}
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
