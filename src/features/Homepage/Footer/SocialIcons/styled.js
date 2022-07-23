import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 24px;
  padding: 0;
  list-style: none;
  margin-bottom: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 16px;
  }
`;

export const styledIcon = Icon => styled(Icon)`
  height: auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 32px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

