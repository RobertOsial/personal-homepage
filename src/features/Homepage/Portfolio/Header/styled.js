import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../Footer/SocialIcons/icons/github.svg";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(GitHubIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 12px;
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 30px;
  margin: 0 0 8px;
`;

export const SubTitle = styled.h3`
  color: ${({theme}) => theme.colors.textPrimary};
  font-weight: 400;
  font-size: 20px;
  margin: 0 0 24px;
`;