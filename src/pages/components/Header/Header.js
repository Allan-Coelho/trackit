import styled from "styled-components";
import logo from "../Shared/logoTitle.svg";

export default function Header({ profilePictureURL }) {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <ProfilePicture profilePictureURL={profilePictureURL} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
  z-index: 10;
`;

const ProfilePicture = styled.img`
  background: url(${(props) => props.profilePictureURL}) center center no-repeat;
  background-size: cover;
  background-color: white;
  border-radius: 50%;
  height: 51px;
  width: 51px;
`;
