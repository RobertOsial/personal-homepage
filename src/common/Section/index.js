import { Title, Wrapper } from "./styled";

export const Section = ({ title, body }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {body}
    </Wrapper>
  );
}