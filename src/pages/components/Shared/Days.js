import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

export default function Days({ setState, state, isDisabled }) {

  function clickHandler(button) {
    let newButtons = [...state];

    if (button.isSelected === true) {
      newButtons[button.number].isSelected = false;
    } else {
      newButtons[button.number].isSelected = true;
    }

    setState(newButtons);
  }

  return (
    <Wrapper>
      {state.map((button, index) => {
        return (
          <Button
            size="small"
            backgroundColor={button.isSelected ? "gray" : "white"}
            fontColor={button.isSelected ? "white" : "gray"}
            type="button"
            border="1px solid #DBDBDB"
            clickFunction={() => clickHandler(button)}
            content={button.name}
            margin="0px 4px 0px 0px"
            key={index}
          ></Button>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  margin-top: 8px;
`;
