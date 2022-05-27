import { ListItem, StyledList, Title, Wrapper } from "./styled";

export const Section = () => {
  return (
    <Wrapper>
      <Title>My skillset includes 🛠️</Title>
      <StyledList>
        <ListItem>HTML</ListItem>
        <ListItem>CS</ListItem>
        <ListItem>JS</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Redux Toolkit</ListItem>
        <ListItem>Redux-saga</ListItem>
      </StyledList>
    </Wrapper>
  );
}