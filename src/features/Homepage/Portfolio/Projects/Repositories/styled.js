
import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding: 0;
  margin: 24px 0 120px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 48px;
  }
`;

export const Tile = styled.li`
  max-width: 592px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  display: flex;
  flex-direction: column;
  gap: 24px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.borderHover};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 24px;  
  margin: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
  } 
`;

export const Description = styled.p`
  line-height: 1.4;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Links = styled.dl`
  display: grid;
  grid-gap: 8px;
  margin: 0;
  line-height: 1.6;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => α(theme.colors.primary, 0.3)};
  padding-bottom: 1px;

  &:hover {
    border-color: unset;
  }
`;
