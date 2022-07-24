import styled from "styled-components";
import { ReactComponent as Warning } from "./warning.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 95px 0 140px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px 0 48px;
  } 
`;

export const WarningIcon = styled(Warning)`
  margin-bottom: 24px;
`;

export const Header = styled.header`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
    margin-bottom: 24px;
  } 
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 32px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    margin-bottom: 24px;
  } 
`;