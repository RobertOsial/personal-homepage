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
    background-color: ${({theme}) => theme.color.whiteLilac};
    color: ${({ theme }) => theme.color.slateGray};
    letter-spacing: 0.05em;
  }
`;