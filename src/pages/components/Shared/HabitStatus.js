import styled from "styled-components";
import checkmark from "../../components/Shared/checkmark.svg";
import Text from "./Text";
import { postCheckHabit, postUncheckHabit } from "../../../services/services";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";

export default function HabitStatus({
  done,
  name,
  id,
  currentSequence,
  highestSequence,
  setIsChanged,
  isChanged,
  setIsLoading,
}) {
  const { loginData } = useContext(UserContext);

  function handleClick(habitID) {
    const config = {
      headers: {
        Authorization: `Bearer ${loginData.token}`,
      },
    };
    let promise;

    if (done) {
      promise = postUncheckHabit(config, habitID);
    } else {
      promise = postCheckHabit(config, habitID);
    }
    setIsLoading(true);
    promise.then(() => {
      setIsChanged(!isChanged);
    });

    promise.catch(() => {
      alert(
        "Não foi possível atualizar o status do hábito. Por favor, tente novamente."
      );
    });
  }

  return (
    <Wrapper>
      <InformationContainer>
        <Text size={"large"} color="gray">
          {name}
        </Text>
        <Text size={"small"} color="gray">
          Sequência Atual:
          <Text
            color={
              currentSequence === highestSequence &&
              currentSequence !== 0 &&
              highestSequence !== 0
                ? "green"
                : "gray"
            }
            size="small"
          >{` ${currentSequence} dias`}</Text>
        </Text>
        <Text size={"small"} color="gray">
          Seu recorde:
          <Text
            color={
              currentSequence === highestSequence &&
              currentSequence !== 0 &&
              highestSequence !== 0
                ? "green"
                : "gray"
            }
            size="small"
          >{` ${highestSequence} dias`}</Text>
        </Text>
      </InformationContainer>
      <CheckButton onClick={() => handleClick(id)} done={done}>
        <CheckMark src={checkmark} />
      </CheckButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px;
  border-radius: 5px;
  background-color: #fff;
  min-height: 94px;
  margin-bottom: 10px;
`;

const CheckButton = styled.div`
  background-color: ${(props) => (props.done ? "#8FC549" : "#E7E7E7")};
  height: 69px;
  min-width: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #e7e7e7;
`;

const CheckMark = styled.img`
  height: 28px;
  width: 35px;
`;

const InformationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 69px;
  max-width: 210px;
`;
