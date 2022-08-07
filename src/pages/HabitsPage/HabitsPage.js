import Footer from "../components/Footer/Footer";
import HabitCard from "../components/HabitCard/HabitCard";
import Header from "../components/Header/Header";
import MainContainer from "../components/Shared/MainContainer";
import Title from "../components/Shared/Title";

export default function HabitsPage() {
  return (
    <>
      <Header
        profilePictureURL={
          "https://www.mlive.com/resizer/P0_a6UgcfkdY6zTH4ua7OE9AWpY=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/us-world-news/photo/odd-fat-cat-adoption-be22e5eb83799ccf.jpg"
        }
      />
      <MainContainer color="gray">
        <Title>{"Meus Hábitos"}</Title>
        <HabitCard />
      </MainContainer>
      <Footer percentage={90} />
    </>
  );
}
