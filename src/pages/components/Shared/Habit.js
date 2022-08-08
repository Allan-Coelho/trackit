import styled from "styled-components";
import trash from "./trash.svg";
import Text from "./Text";
import Days from "./Days";
import { deleteHabit } from "../../../services/services";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";

export default function Habit({ name, days, id }) {
  const standardDays = [
    { name: "D", number: 0, isSelected: false },
    { name: "S", number: 1, isSelected: false },
    { name: "T", number: 2, isSelected: false },
    { name: "Q", number: 3, isSelected: false },
    { name: "Q", number: 4, isSelected: false },
    { name: "S", number: 5, isSelected: false },
    { name: "S", number: 6, isSelected: false },
  ];
  const { loginData } = useContext(UserContext);

  function deleteHandler() {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTIxNSwiaWF0IjoxNjU5OTEyOTIwfQ.3YZA58piwqk_kJFWqSp8a8RLxeasC98GZp068PZKZBQ",
      },
    };

    const confirmation = window.confirm(
      "Você tem certeza que quer deletar esse hábito?"
    );

    if (confirmation === false) {
      return;
    }

    const promise = deleteHabit(id, config);

    promise.then(() => window.location.reload());
  }

  const daysData = standardDays.map((day) => {
    if (days.includes(day.number)) {
      day.isSelected = true;
      return day;
    }
    return day;
  });

  return (
    <Wrapper>
      <DeleteButton src={trash} onClick={() => deleteHandler(id)} />
      <ContentContainer>
        <Text size="large" color="medium">
          {name}
        </Text>
        <Days state={daysData} isDisabled={true} />
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 14px;
  min-height: 91px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 63px;
  max-width: 270px;
`;

const DeleteButton = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 18px;
  width: 15.6px;
  cursor: pointer;
`;
