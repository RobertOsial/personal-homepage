import { ThemeSwitcher } from "../../common/ThemeSwitch";
import { Footer } from "./Footer";
import { MainInformation } from "./MainInformation";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { nextSkills, skills } from "./Skills/skills";
import { Container } from "./styled";

export const Homepage = () => (
  <Container>
    <ThemeSwitcher />
    <MainInformation />
    <main>
      <Skills
        title="My skillset includes"
        skills={skills} />
      <Skills
        title="What I want to learn next"
        skills={nextSkills} />
      <Portfolio />
      <Footer />
    </main>
  </Container>
);
