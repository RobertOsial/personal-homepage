import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  color: inherit;
  background: none;
  cursor: pointer;
  outline-offset: 12px;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.div`
  display: flex;  
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid;
  padding: 3px;
  width: 48px;
  border-radius: 12px;
`;

export const IconWrapper = styled.div`
  display: flex;
  background: currentColor;
  padding: 3px;
  border-radius: 50%;
  transition: transform 0.3s;

  ${({ moveToRight }) => moveToRight && css`
    transform: translateX(20px);
  `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;

