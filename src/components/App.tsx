import '../index.css'
import AboutSection from './AboutSection'
import FooterSection from './FooterSection'
import GetStartedSection from './GetStartedSection'
import IntroSection from './IntroSection'
import NavBar from './NavBar'
import TeamSection from './TeamSection'

function App() {


  return (
    <>
      <NavBar></NavBar>
      <IntroSection></IntroSection>
      <AboutSection></AboutSection>
      <GetStartedSection></GetStartedSection>
      <TeamSection></TeamSection>
      <FooterSection></FooterSection>
    </>
    
  )
}

export default App
