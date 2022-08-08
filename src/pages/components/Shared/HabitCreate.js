import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Days from "./Days";
import InputBox from "./InputBox";
import Text from "./Text";
import axios from "axios";

export default function HabitCreate({ setIsAdd, setHabit }) {
  const standardDays = [
    { name: "D", number: 0, isSelected: false },
    { name: "S", number: 1, isSelected: false },
    { name: "T", number: 2, isSelected: false },
    { name: "Q", number: 3, isSelected: false },
    { name: "Q", number: 4, isSelected: false },
    { name: "S", number: 5, isSelected: false },
    { name: "S", number: 6, isSelected: false },
  ];
  const [name, setName] = useState("");
  const [days, setDays] = useState(standardDays);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function cancel() {
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTIxNSwiaWF0IjoxNjU5OTEyOTIwfQ.3YZA58piwqk_kJFWqSp8a8RLxeasC98GZp068PZKZBQ",
      },
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body,
      config
    );

    setIsLoading(true);

    promise.then(() => {
      setIsLoading(false);
      setDays(standardDays);
      setName("");
      setIsAdd(false);
      window.location.reload();
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
