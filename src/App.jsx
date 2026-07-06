import Navbar from './components/navbar'
import Banner from './components/banner'
import WhoWeAre from './components/whoWeAre'
import VisionMission from './components/missionAndVission'
import EducationGap from './components/education'
import ExecutionModel from './components/executionModel'
import FlagshipProgram from './components/flagshipprogram'
import FeaturedProgram from './components/featuredProgram'
import ContactCTA from './components/contactCta'
import CompetitiveAdvantages from './components/cometitiveAdvantages'
import Footer from './components/footer'
import Marqueue from './components/marqueue'
import ContactModal from './components/contactModel'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <VisionMission />
      <Marqueue />
      <EducationGap />
      <ExecutionModel />
      <FlagshipProgram />
      <FeaturedProgram />
      <CompetitiveAdvantages />
      <ContactCTA />
      <Footer />

      <ContactModal />
    </>
  )
}

export default App
