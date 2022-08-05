import styled from "styled-components";

export default function InputBox({ placeHolder, type, required = true }) {
  return <Wrapper placeholder={placeHolder} type={type} required={required} />;
}

const Wrapper = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  background-color: white;
  margin: 3px 0px;

  &::placeholder {
    font-size: 20px;
    color: #dbdbdb;
  }
`;
