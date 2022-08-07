import styled from "styled-components";

export default function InputBox({
  placeHolder,
  type,
  required = true,
  setState,
  isDisabled = false,
}) {
  return (
    <Wrapper
      placeholder={placeHolder}
      type={type}
      required={required}
      setState={setState}
      onChange={(event) => {
        setState(event.target.value);
      }}
      disabled={isDisabled}
    />
  );
}

const Wrapper = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  background-color: white;
  margin: 3px 0px;
  font-size: 20px;

  &::placeholder {
    font-size: 20px;
    color: #dbdbdb;
  }

  &:disabled {
    background-color: #f2f2f2;
    color: #b3b3b3;
  }
`;
