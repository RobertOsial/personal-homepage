import { List } from "../../../common/List";
import { ListItem } from "../../../common/List/styled";
import { Section } from "../../../common/Section";
import { skills } from "./skills";

export const Skills = () => {
  const listContent = skills.map((skill, index) => (
    <ListItem key={index}>{skill.content}</ListItem>
  ));

  return (
    <Section
      title="My skillset includes 🛠️"
      body={<List listContent={listContent} />}
    />
  );
}

