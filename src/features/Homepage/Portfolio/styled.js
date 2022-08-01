import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "./github.svg";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(GitHubIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const MyRecentProjects = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 400;
  font-size: 20px;
  margin: 8px 0 0 0;
`;