
import styled from "styled-components";

export const Tile = styled.li`
  max-width: 592px;
  height: 322px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0 0 120px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 24px;  
  margin: 0 0 24px;
`;

export const Description = styled.p`
  line-height: 1.4;
  font-weight: 400;
  font-size: 18px;
  margin: 0 0 24px;
  display: flex;
  flex-wrap: wrap;
`;

export const Links = styled.dl`
  display: grid;
  grid-gap: 8px;
  margin: 0;
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`

export const Link = styled.a`
  color: ${({theme}) => theme.colors.primary};
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);
`;
