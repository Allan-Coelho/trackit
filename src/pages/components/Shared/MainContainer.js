import styled from "styled-components";

export default function MainContainer({ color, children }) {
  return <Wrapper color={color}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 18px;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => {
    return props.color === "gray" ? "#E5E5E5" : "#fff";
  }};
`;
