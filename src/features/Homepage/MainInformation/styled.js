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
  color: ${({ theme }) => theme.color.mineShaft};
  font-weight: 900;
  font-size: 38px;
  margin: 0 0 35px;
`;

export const AboutMe = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin: 0 0 32px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border: 1px solid rgba(209, 213, 218, 0.3);
  gap: 16px;
`;

export const ButtonIcon = styled(EnvelopeIcon)`

`;

