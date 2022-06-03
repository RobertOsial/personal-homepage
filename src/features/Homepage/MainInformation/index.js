import {
  AboutMe,
  Button,
  ButtonIcon,
  Content,
  Introduction,
  ProfileImage,
  Title,
  Wrapper
} from "./styled";
import image from "../images/profile.jpg"

export const MainInformation = () => {
  return (
    <Wrapper>
      <ProfileImage src={image} alt="Robert Osial"></ProfileImage>
      <Content>
        <Introduction>THIS IS</Introduction>
        <Title>Robert Osial</Title>
        <AboutMe>I'm a passionate Frontend Develooper in love wirh React, currently looking for new jobs</AboutMe>
        <Button>
          <ButtonIcon />
          Hire Me
        </Button>
      </Content>
    </Wrapper>
  );
}