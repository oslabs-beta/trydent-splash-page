import AboutSection from '../components/AboutSection'
import FooterSection from '../components/FooterSection'
import GetStartedSection from '../components/GetStartedSection'
import IntroSection from '../components/IntroSection'
import TeamSection from '../components/TeamSection'

/**
 * The Home page contains all the information 
 * @component
 * @returns {ReactElement} The Home page
 */

const HomePage :React.FC = () =>{

  return (
    <>
      <IntroSection />
      <AboutSection />
      <GetStartedSection />
      <TeamSection />
      <FooterSection />
    </>
    
  )
}

export default HomePage
