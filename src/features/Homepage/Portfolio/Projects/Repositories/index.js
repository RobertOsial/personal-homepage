import {
  Description,
  Link,
  Links,
  LinksRow,
  LinksValue,
  List,
  Title,
  Tile
} from "./styled";


export const Repositories = ({ projects }) => (
  <List >
    {projects.map(({ name, description, html_url, homepage }) => (
      <Tile key={name}>
        <Title>{name}</Title>
        <Description>
          {description}
        </Description>
        <Links>
          <LinksRow>
            <dt>Demo:</dt>
            <LinksValue>
              <Link href={homepage}>{homepage}</Link>
            </LinksValue>
          </LinksRow>
          <LinksRow>
            <dt>Repo:</dt>
            <LinksValue>
              <Link href={html_url}>{html_url}</Link>
            </LinksValue>
          </LinksRow>
        </Links>
      </Tile>
    ))}
  </List>
);