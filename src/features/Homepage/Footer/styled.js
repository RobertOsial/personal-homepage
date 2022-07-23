import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-bottom: 120px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 31px;
  }
`;

export const Address = styled.address`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-style: unset;
  margin-bottom: 56px;
`;

export const LetsTalk = styled.h2`
  color: ${({ theme }) => theme.colors.site.text};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  margin: 0 0 24px;
  letter-spacing: initial;
`;

export const EmailWrapper = styled.div`
  margin: 24px 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 12px 0;
  }
`;

export const EmailLink = styled.a`
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  max-width: 670px;
  line-height: 1.4;
  font-size: 18px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

