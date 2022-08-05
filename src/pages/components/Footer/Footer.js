import styled from "styled-components";
import Text from "../Shared/Text";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer({ percentage }) {
  return (
    <>
      <Wrapper>
        <Text color="blue" size="medium" pointer={true}>
          {"Hábitos"}
        </Text>
        <ProgressContainer>
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
        <Text color="blue" size="medium" pointer={true}>
          {"Histórico"}
        </Text>
      </Wrapper>
    </>
  );
}

const ProgressContainer = styled.div`
  position: fixed;
  bottom: 10px;
  border-radius: 50%;
  margin-left: -49px;
  left: 50%;
  height: 91px;
  width: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
