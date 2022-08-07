import styled from "styled-components";

export default function Habit({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 18px;
  border-radius: 5px;
  background-color: #fff;
`;
