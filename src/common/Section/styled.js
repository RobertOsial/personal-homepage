import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  padding-bottom: 18px;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;