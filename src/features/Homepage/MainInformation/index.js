import { ReactComponent as EnvelopeIcon } from "./envelope.svg";
import {
  AboutMe,
  ButtonLink,
  ButtonIcon,
  ProfileImage,
  Wrapper,
  Name,
  ThisIs
} from "./styled";
import robertOsialProfile from "./profile.jpg"
import { email } from "../email";

export const MainInformation = () => {
  return (
    <Wrapper>
      <ProfileImage src={robertOsialProfile} alt="Robert Osial"></ProfileImage>
      <div>
        <ThisIs>THIS IS</ThisIs>
        <Name>Robert Osial</Name>
        <AboutMe>I'm a passionate Frontend Develooper working in React, currently looking for new job opportunities</AboutMe>
        <ButtonLink href={`mailto:${email}`} title={email}>
          <EnvelopeIcon />
          <span>Hire Me</span>
        </ButtonLink>
      </div>
    </Wrapper>
  );
}