import { skills } from "../../features/Homepage/Skills/skills";
import { ListItem, StyledList } from "./styled";

export const List = ({ listContent }) => {
  return (
    <StyledList>
      {listContent}
    </StyledList>
  );
};