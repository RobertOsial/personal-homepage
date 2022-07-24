import { ButtonLink } from "../../../MainInformation/styled";
import { githubUsername } from "../../githubaUsername";
import { Header, Paragraph, WarningIcon, Wrapper } from "./styled";


export const ErrorBox = () => {
  return (
    <Wrapper>
      <WarningIcon />
      <Header>Ooops! Something went&nbsp;wrong...</Header>
      <Paragraph>
        Sorry, failed to load Github&nbsp;projects.<br />
        You can check them directly&nbsp;on&nbsp;Github.
      </Paragraph>
      <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">Go to Github</ButtonLink>
    </Wrapper>
  );
};