import styled from "styled-components";
import checkmark from "../../components/Shared/checkmark.svg";
import Text from "./Text";

export default function HabitStatus({
  done = false,
  name,
  id,
  currentSequence,
  highestSequence,
}) {
  function handleClick() {
    
  }

  return (
    <Wrapper>
      <InformationContainer>
        <Text size={"large"} color="gray">
          {name}
        </Text>
        <Text
          size={"small"}
          color="gray"
        >{`Sequência Atual: ${currentSequence} dias`}</Text>
        <Text
          size={"small"}
          color="gray"
        >{`Seu recorde: ${highestSequence} dias`}</Text>
      </InformationContainer>
      <CheckButton onClick={handleClick} done={done}>
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
