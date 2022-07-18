import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "../images/envelope.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  align-items: center;
  margin-bottom: 63px;
`;

export const ProfileImage = styled.img`
  width: 30vw;
  max-width: 398px;
  border-radius: 50%;
`;

export const Content = styled.div`
`;

export const Introduction = styled.p`
font-size: 12px;
font-weight: 700;
margin: 0 0 12px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 38px;
  margin: 0 0 35px;
`;

export const AboutMe = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin: 0 0 32px;
`;

export const ButtonLink = styled.a`
  color: ${({ theme }) => theme.colors.buttonLink.text};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  font-weight: 600;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  gap: 16px;
  text-decoration: none;
  width: 150px;
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

