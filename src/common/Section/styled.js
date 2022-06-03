import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  border-radius: 4px;
  padding: 32px;
  margin-bottom: 72px;
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.color.mineShaft};
  font-weight: 900;
  font-size: 30px;
  padding-bottom: 18px;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.mercury};
`;