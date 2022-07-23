import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./envelope.svg";

export const Wrapper = styled.header`
  margin-top: -30px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  align-items: center;
  margin-bottom: 63px;

  @media(max-width: ${({theme}) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const ProfileImage = styled.img`
  width: 30vw;
  max-width: 398px;
  border-radius: 50%;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    width: 132px;
  }
`;

export const ThisIs = styled.p`
font-size: 12px;
font-weight: 700;
margin: 0 0 12px;
letter-spacing: initial;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 38px;
  margin: 0 0 35px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
`;

export const AboutMe = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin: 0 0 32px;
  max-width: 650px;
  line-height: 1.4;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    max-width: 570px;
  }
`;

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

export const ButtonIcon = styled(EnvelopeIcon)`

`;

