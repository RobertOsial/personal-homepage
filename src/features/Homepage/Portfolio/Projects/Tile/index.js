import {
  Description,
  Link,
  Links,
  LinksRow,
  LinksValue,
  Title,
  Wrapper
} from "./styled";


export const Tile = ({ name, description, repoUrl, demoUrl }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Description>
        {description}
      </Description>
      <Links>
        <LinksRow>
          <dt>Demo:</dt>
          <LinksValue>
            <Link href={demoUrl}>{demoUrl}</Link>
          </LinksValue>
        </LinksRow>
        <LinksRow>
          <dt>Repo:</dt>
          <LinksValue>
            <Link href={repoUrl}>{repoUrl}</Link>
          </LinksValue>
        </LinksRow>
      </Links>
    </Wrapper>
  );
}