import styled from "styled-components";

export const Container = styled.div`
  max-width: 1216px;
  margin: 115px auto 109px;
  padding: 0 24px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    margin: 32px auto 31px;
  }
`;