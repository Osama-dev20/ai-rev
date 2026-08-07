import NavBar from '../components/NavBar'
import HeroSection from "../components/HeroSection"
import AiTypes from "../components/AiTypes"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <NavBar />
      <main>
         <HeroSection />
         <AiTypes />
         <Contact />
      </main>
       <Footer />
    </>
  )
}

export default Home
