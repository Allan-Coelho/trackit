import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Days from "./Days";
import InputBox from "./InputBox";
import Text from "./Text";
import UserContext from "../../../contexts/UserContext";
import { postHabit } from "../../../services/services";
import { standardDays } from "../../../constants/constants";

export default function HabitCreate({ setIsAdd, isChanged, setIsChanged }) {
  const { loginData, createCardData, setCreateCardData } =
    useContext(UserContext);
  const [name, setName] = useState(createCardData.name);
  const [days, setDays] = useState(createCardData.days);
  const [isLoading, setIsLoading] = useState(false);

  console.log(createCardData);

  function handleChange(event) {
    setName(event.target.value);
  }

  function cancel() {
    setCreateCardData({
      name: name,
      days: days,
    });
    setIsAdd(false);
  }

  function save() {
    const selectedDays = days
      .filter((day) => day.isSelected === true)
      .map((day) => day.number);

    if (name === "") {
      alert("Insira um nome");
      return;
    }

    if (selectedDays.length === 0) {
      alert("Insira selecione o(s) dia(s) da semana");
      return;
    }

    const body = {
      name: name,
      days: selectedDays,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${loginData.token}`,
      },
    };

    const promise = postHabit(body, config);

    setIsLoading(true);

    promise.then(() => {
      setIsLoading(false);
      setIsAdd(false);
      setCreateCardData({
        name: "",
        days: standardDays,
      });
      setIsChanged(!isChanged);
    });
  }
  return (
    <Wrapper>
      <InputBox
        placeHolder={"nome do hábito"}
        type="text"
        value={name}
        required={true}
        handleChange={handleChange}
        isDisabled={isLoading}
      />
      <Days setState={setDays} state={days} isDisabled={isLoading} />
      <ButtonsContainer>
        <Text
          size="small"
          color="blue"
          position="center"
          decoration="underline"
          pointer={true}
          clickFunction={cancel}
        >
          {"Cancelar"}
        </Text>
        <Button
          size={"medium"}
          backgroundColor="blue"
          fontColor="white"
          margin="0px 0px 0px 23px"
          content={"Salvar"}
          clickFunction={save}
          isDisabled={isLoading}
        />
      </ButtonsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 18px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 29px;
  width: 100%;
`;
