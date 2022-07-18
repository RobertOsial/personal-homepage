import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 html {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
   }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: ${({theme}) => theme.colors.site.background};
    color: ${({ theme }) => theme.colors.site.text};
    letter-spacing: 0.05em;
    word-break: break-word;
    transition: background 0.3s;
  }
`;