import { SocialIcons } from "./SocialIcons";
import {
  Address,
  Email,
  LetsTalk,
  Paragraph,
  Wrapper
} from "./styled";

export const Footer = () => {

  return (
    <Wrapper>
      <LetsTalk>LET'S TALK</LetsTalk>
      <Address>
        <Email>rob.osial@gmail.com</Email>
        <Paragraph>
          I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me.
        </Paragraph>
      </Address>
      <SocialIcons />
    </Wrapper>
  );
};