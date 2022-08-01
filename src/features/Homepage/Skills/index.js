import { Bullet, Item, List, Section, StyledHeader } from "./styled";

export const Skills = ({ skills, title }) => {

  return (
    <Section>
      <StyledHeader>{title}</StyledHeader>
      <List>
        {skills.map((skill) => (
          <Item key={skill}>
            <Bullet />
            {skill}
          </Item>
        ))}
      </List>
    </Section>
  );
}