import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import FeaturesUsers from './components/FeaturesUsers'
import HowItWorks from './components/HowItWorks'
import SmartCoins from './components/SmartCoins'
import FeaturesCompanies from './components/FeaturesCompanies'
import Stats from './components/Stats'
import Download from './components/Download'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-dark text-text-main overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <FeaturesUsers />
      <HowItWorks />
      <SmartCoins />
      <FeaturesCompanies />
      <Stats />
      <Download />
      <Contact />
      <Footer />
    </div>
  )
}
