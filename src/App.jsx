import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";
import {themeDark, themeLight} from "./theme.js";
import {selectIsDarkTheme} from "./common/themeSlice.js";
import {ThemeSwitch} from "./common/ThemeSwitch/ThemeSwitch.tsx";
import {Container} from "./features/personalHomepage/PersonalHomepage/Container/Container.tsx";
import {MainInformation} from "./features/personalHomepage/PersonalHomepage/MainInformation/MainInformation.tsx";
import {Skills} from "./features/personalHomepage/PersonalHomepage/Skills/Skills.tsx";
import toolsIcon from "./assets/images/tools.png"
import rocketIcon from "./assets/images/rocket.png"
import {skills, skillsNext} from "./features/personalHomepage/PersonalHomepage/skillsData.js";
import {Portfolio} from "./features/personalHomepage/PersonalHomepage/Portfolio/Portfolio.tsx";
import {Footer} from "./features/personalHomepage/PersonalHomepage/Footer/Footer.tsx";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Container>
        <ThemeSwitch/>
        <MainInformation/>
        <main>
          <Skills
            title={(
              <>
                My skillset includes: <img src={toolsIcon} alt=""/>
              </>
            )}
            skills={skills}
          />
          <Skills
            title={(
              <>
                What I want to learn next: <img src={rocketIcon} alt=""/>
              </>
            )}
            skills={skillsNext}
          />
        </main>
        <Portfolio/>
        <Footer/>
      </Container>
    </ThemeProvider>
  )
}

export default App;
