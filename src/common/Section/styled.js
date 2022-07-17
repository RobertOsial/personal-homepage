import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;
  padding: 32px;
  margin-bottom: 72px;
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 30px;
  padding-bottom: 18px;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
`;