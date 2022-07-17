
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { selectIsDarkTheme } from "./common/ThemeSwitch/themeSlice";
import { Homepage } from "./features/Homepage";
import { GlobalStyle } from "./globalStyle";
import { themeDark, themeLight } from "./theme";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
