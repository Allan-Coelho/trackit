import styled from "styled-components";
import Text from "../Shared/Text";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";

export default function Footer() {
  const { percentage } = useContext(UserContext);

  return (
    <>
      <Wrapper>
        <Link to={"/habitos"}>
          <Text color="blue" size="medium" pointer={true}>
            {"Hábitos"}
          </Text>
        </Link>
        <ProgressContainer>
          <Link to={"/hoje"}>
            <TodayButton>Hoje</TodayButton>
          </Link>
          <CircularProgressbar
            value={percentage}
            strokeWidth={8}
            background={true}
            backgroundPadding={6}
            styles={buildStyles({
              strokeLinecap: "round",
              textColor: "#fff",
              backgroundColor: "#52b6ff",
              pathColor: "#fff",
              textSize: "23px",
            })}
          />
        </ProgressContainer>
        <Link to={"/historico"}>
          <Text color="blue" size="medium" pointer={true}>
            {"Histórico"}
          </Text>
        </Link>
      </Wrapper>
    </>
  );
}

const ProgressContainer = styled.div`
  border-radius: 50%;
  height: 91px;
  width: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 36px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
`;

const TodayButton = styled.span`
  position: fixed;
  bottom: 47px;
  left: 43.5vw;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
