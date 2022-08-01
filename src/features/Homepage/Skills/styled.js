import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ReactComponent as BulletImage } from "./bullet.svg";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  padding: 32px;
  margin-bottom: 72px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    margin-bottom: 50px;
  }
`;

export const List = styled.ul`
  margin-top: 32px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  padding: 0;
  list-style: none;
  line-height:  1.4;
  font-weight: 400;
  font-size: 18px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
  }
`;

export const Bullet = styled(BulletImage)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 16px;
  height: auto;
`;

export const StyledHeader = styled(SubHeader)`
    padding-bottom: 18px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
`;


export const Item = styled.li`
  display: flex;
  align-items: center;
`