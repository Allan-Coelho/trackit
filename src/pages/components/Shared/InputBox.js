import styled from "styled-components";

export default function InputBox({
  placeHolder,
  type,
  required = true,
  handleChange,
  isDisabled = false,
  name,
  value,
}) {
  return (
    <Wrapper
      placeholder={placeHolder}
      type={type}
      required={required}
      name={name}
      value={value}
      onChange={handleChange}
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
