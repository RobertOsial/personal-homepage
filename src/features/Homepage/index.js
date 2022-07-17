import { Container } from "../../common/Container";
import { ThemeSwitcher } from "../../common/ThemeSwitch";
import { Footer } from "./Footer";
import { MainInformation } from "./MainInformation";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { WantToLearn } from "./WantToLearn";

export const Homepage = () => {

  return (
    <Container>
      <ThemeSwitcher />
      <MainInformation />
      <main>
        <Skills />
        <WantToLearn />
        <Portfolio />
        <Footer />
      </main>
    </Container>

  );
};