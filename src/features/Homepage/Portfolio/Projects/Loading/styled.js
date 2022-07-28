import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg"

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 88px; 
  font-size: 20px;
  line-height: 1.4;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
    margin-top: 32px;
  }
`;

export const SpinnerIcon = styled(Spinner)`
  color: ${({ theme }) => theme.colors.primary};
  animation: ${rotate} 1s linear infinite;
  margin: 48px 0 140px;
  height: auto;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    margin: 32px 0 42px ;
    width: 60px;
  }
`;