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

export const Header = () => {
  return (
    <Wrapper>
      <ProfileImage src="https://picsum.photos/200/300?random=2"></ProfileImage>
      <Content>
        <Introduction>THIS IS</Introduction>
        <Title>Robert Osial</Title>
        <AboutMe>I'm a passionate Frontend Develooper in love wirh React, currently looking for new jobs</AboutMe>
        <Button>
          <ButtonIcon />
          <span>Hire Me</span>
        </Button>
      </Content>
    </Wrapper>
  );
}