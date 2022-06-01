import { List } from "../../../common/List";
import { ListItem } from "../../../common/List/styled";
import { Section } from "../../../common/Section";
import { wantToLearn } from "./wantToLearn";

export const WantToLearn = () => {
  const listContent = wantToLearn.map((skill, index) => <ListItem key={index}>{skill.content}</ListItem>)

  return (
    <Section
      title="What I want to learn next 🚀"
      body={<List listContent={listContent} />}
    />
  );
};