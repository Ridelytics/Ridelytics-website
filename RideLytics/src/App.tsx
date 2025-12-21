import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import LogoCarousel from './components/LogoCarousel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navigation />
      <Hero />
      <Features />
      <LogoCarousel />
      <Footer />
      </div>
  )
}

export default App
