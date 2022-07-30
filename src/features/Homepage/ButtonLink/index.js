import styled from "styled-components";

export const ButtonLink = styled.a`
  color: ${({ theme }) => theme.colors.buttonLink.text};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  padding: 12px 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMix}px) {
    font-size: 18px;
  }
`;