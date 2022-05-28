import { skills } from "../../features/Homepage/Skills/skills";
import { ListItem, StyledList } from "./styled";

export const List = () => {
  return (
    <StyledList>
      {skills.map((skill, index) => (
        <ListItem key={index}>{skill.content}</ListItem>
      ))}
    </StyledList>
  );
};