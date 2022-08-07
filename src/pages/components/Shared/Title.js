import styled from "styled-components";
import Button from "./Button";
export default function Title({ children }) {
  return (
    <Wrapper>
      <TitleStyle>{children}</TitleStyle>
      <Button
        margin="0px"
        size={"small"}
        backgroundColor="blue"
        content={<AddStyle>{"+"}</AddStyle>}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 28px 0px 20px 0px;
`;

const TitleStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 29px;
  color: #126ba5;
  font-size: 23px;
`;

const AddStyle = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  margin-bottom: 4px;
  height: 16px;
  font-size: 30px;
  line-height: 34px;
`;
